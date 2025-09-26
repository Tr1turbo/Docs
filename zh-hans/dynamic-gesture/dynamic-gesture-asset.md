# ![](/dynamic-gesture/dynamic_gesture_asset.png){style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"} 动态手势资产

定义用于 **动态手势系统** 的自定义手势行为和集成方式。
`DynamicGestureAsset` 封装了手势播放、动画行为、追踪控制以及手势覆盖目标的设置。

创建后，该资产可以安装并分配给 `动态手势组件` 以启用手势功能。

## 属性

### `手势名称`

手势的显示名称。
会显示在 **Expression Menu** 中。

### `手势图标`

与该手势关联的图标，会显示在 **Expression Menu** 中。

### `动画类型`

定义所分配动画的播放行为。

| 值            | 说明                             |
| ------------ | ------------------------------ |
| `BlendTree`  | 根据 `GestureWeight` 混合多个动画剪辑。   |
| `MotionTime` | 根据 `GestureWeight` 播放单个动画对应的帧。 |
| `Speed`      | 根据 `GestureWeight` 成比例地调整播放速度。 |

### `OverrideGestures`

指定此资产将覆盖的 VRChat 默认手势。
列出的手势类型将在运行时被设置的动态手势行为替代。

## 动画类型

### `BlendTree`

根据 `GestureWeight` 播放多个动画剪辑的混合。

* `GestureWeight` 范围：`0.0f`（张开的手） ↔ `1.0f`（握拳）
* 适用于需要在多个姿势间平滑过渡的情况。

::: info
`GestureWeight` 值：

0.0 → 张开的手

1.0 → 握拳
:::

### `MotionTime`

根据 `GestureWeight` 播放单个动画在标准化时间的位置。

* `GestureWeight` 直接对应到动画的标准化时间（0 → 1）。
* 适用于由手部开合度或扳机压力直接控制的渐进式手势动画。

::: info
示例：`GestureWeight = 0.5` → 动画播放到中间帧。
:::

### `Speed`

以根据 `GestureWeight` 调整的速度播放单个动画。

::: info
`GestureWeight` = 1.0f → 100% 播放速度

`GestureWeight` < 1.0f → 播放速度变慢
:::

## 高级设置

### `TrackingType`

指定手势状态启用时的手部追踪处理方式。
系统会自动将 [`VRCAnimatorTrackingControl`](https://creators.vrchat.com/avatars/state-behaviors#animator-tracking-control) 添加到状态中。

| 值           | 说明                |
| ----------- | ----------------- |
| `Tracking`  | 保持 VRChat 手指追踪启用。 |
| `Animation` | 禁用追踪，让动画完全控制手部动作。 |

::: info 建议
如果手势动画需要完全覆盖手指追踪，请使用 `Animation`。
否则，追踪输入可能会干扰动画效果。
:::

### `进入动画`

（可选）当从标准 VRChat 手势进入手势状态时，定义一段**仅播放一次**的动画。

* 可为每个输入手势单独设置。
* 会在手势动画开始前播放。

**使用示例：** 为手势切换加入过渡动画，使变化更加自然。