# <img class="dark-only" src="/mouth_tracking_settings_icon.png" alt="Mouth Tracking Settings" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> 嘴部追踪设置

**嘴部追踪设置**组件用于控制面部追踪中下颌动作和嘴部混合形状的处理方式。提供了用于调整下颌强度以及重置行为的设置。
![Mouth Tracking Settings](/mouth_tracking_settings.png)


## 参数

### **Jaw Strength（下颌强度）**

* **说明**：控制张嘴时下颌动作的程度。
* **行为**：

  * `0`：只有嘴巴张开，下颌不动。
  * `1`：下颌和嘴巴同时张开。
  * 中间值会产生两者的混合效果。

<video width="500" height="500" autoplay muted loop playsinline>
  <source src="/mouth_tracking_settings_jaw_strength_slider.mp4" />
</video>

::: info
控制口部张合和下颌动作的混合形状是 `JawOpen`。
在内部，`JawOpen` 被分成两个贡献混合形状：

* `JawDrop*` — 控制下颌向下移动
* `MouthOpen*` — 控制嘴巴自身的张开变形

默认情况下，上颌保持固定，下颌在张嘴时移动。
:::

---

### **Reset Weight（重置权重）**

* **说明**：决定张嘴时 **Reset Clip** 中定义的其他混合形状被重置的强度。
* **行为**：

  * `0`：张嘴时不进行重置。
  * `1`：指定的混合形状会被完全重置。
  * 中间值则提供柔和的重置效果。

---

### **预览**

* 可以在编辑器中直接测试调整，无需进入播放模式。

<div style="display: flex; gap: 1%; flex-wrap: wrap;">
  <video style="width: 49%;" autoplay muted loop playsinline>
    <source src="/mouth_tracking_settings_preview_at_jaw0.mp4" />
  </video>
  <video style="width: 49%;" autoplay muted loop playsinline>
    <source src="/mouth_tracking_settings_preview_at_jaw1.mp4" />
  </video>
</div>

## 创作者设置

::: warning
这些设置仅面向高级用户，不建议手动调整。
必须与 Expression Menu、Controller 等其他资源保持一致。
若未正确配置，可能会导致功能异常。
:::

* **Parameters**
  分配用于处理口部追踪相关表情参数的 `MA Parameter` 组件。

* **Reset Clip**
  定义下颌张开时需要重置的混合形状的动画剪辑。

* **Mouth Reset Weight Parameter**
  用于驱动重置混合形状权重的参数名称。
  示例：`FT/Settings/MouthResetWeight`

* **Jaw Drop Parameter**
  控制下颌下落强度的参数名称。
  示例：`FT/Settings/JawDropStrength`

