# ![](/dynamic-gesture/dynamic_gesture_asset.png){style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"} Dynamic Gesture Asset

定義用於 **動態手勢系統** 的自訂手勢行為與整合方式。  
`DynamicGestureAsset` 封裝了手勢播放、動畫行為、追蹤控制及手勢覆蓋目標的設定。

建立後，此資產可安裝並指派給 `動態手勢組件`以啟用手勢功能。

## 屬性

### `手勢名稱`

手勢的顯示名稱。  
會顯示在 **Expression Menu** 中。

### `手勢圖示`

與該手勢關聯的圖示，會顯示在 **Expression Menu** 中。

### `動畫類型`

定義所分配動畫的播放行為。

| 值           | 說明                                                              |
| ------------ | ----------------------------------------------------------------- |
| `BlendTree`  | 根據 `GestureWeight` 混合多個動畫剪輯。                          |
| `MotionTime` | 根據 `GestureWeight` 播放單一動畫對應的影格。                    |
| `Speed`      | 根據 `GestureWeight` 成比例地調整播放速度。                      |

### `OverrideGestures`

指定此資產將覆蓋的 VRChat 預設手勢。  
列出的手勢類型會在執行時被設定的動態手勢行為取代。

## 動畫類型

### `BlendTree`

根據 `GestureWeight` 播放多個動畫剪輯的混合。

* `GestureWeight` 範圍：`0.0f`（張開的手） ↔ `1.0f`（握拳）
* 適用於需要在多個姿勢間平滑過渡的情況。

::: info
`GestureWeight` 值：

0.0 → 張開的手

1.0 → 握拳
:::

### `MotionTime`

根據 `GestureWeight` 播放單一動畫在正規化時間的位置。

* `GestureWeight` 直接對應到動畫的正規化時間（0 → 1）。
* 適用於由手部開合度或扳機壓力直接控制的漸進式手勢動畫。

::: info
範例：`GestureWeight = 0.5` → 動畫播放到中間影格。
:::

### `Speed`

以根據 `GestureWeight` 調整的速度播放單一動畫。

::: info
`GestureWeight` = 1.0f → 100% 播放速度

`GestureWeight` < 1.0f → 播放速度變慢
:::

## 進階設定

### `TrackingType`

指定手勢狀態啟用時的手部追蹤處理方式。  
系統會自動將 [`VRCAnimatorTrackingControl`](https://creators.vrchat.com/avatars/state-behaviors#animator-tracking-control) 加入到狀態中。

| 值           | 說明                                               |
| ------------ | -------------------------------------------------- |
| `Tracking`   | 保持 VRChat 手指追蹤啟用。                         |
| `Animation`  | 停用追蹤，讓動畫完全控制手部動作。                 |

::: info 建議
如果手勢動畫需要完全覆蓋手指追蹤，請使用 `Animation`。  
否則，追蹤輸入可能會干擾動畫效果。
:::

### `進入動畫`

（可選）當從標準 VRChat 手勢進入手勢狀態時，定義一段**僅播放一次**的動畫。

* 可針對每個輸入手勢單獨設定。
* 會在手勢動畫開始前播放。

**使用範例：** 為手勢切換加入過渡動畫，使變化更自然。
