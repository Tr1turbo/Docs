# <img class="dark-only" src="/mouth_tracking_settings_icon.png" alt="Mouth Tracking Settings" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> 嘴部追蹤設定

**嘴部追蹤設定**組件用於控制面部追蹤中下頜動作和嘴部混合形狀的處理方式。提供了用於調整下頜強度以及重置行為的設定。
![Mouth Tracking Settings](/mouth_tracking_settings.png)


## 參數

### **Jaw Strength（下頜強度）**

* **說明**：控制張嘴時下頜動作的程度。
* **行為**：

  * `0`：只有嘴巴張開，下頜不動。
  * `1`：下頜和嘴巴同時張開。
  * 中間值會產生兩者的混合效果。

<video width="500" height="500" autoplay muted loop playsinline>
  <source src="/mouth_tracking_settings_jaw_strength_slider.mp4" />
</video>

::: info
控制口部張合和下頜動作的混合形狀是 `JawOpen`。
在內部，`JawOpen` 被分成兩個貢獻混合形狀：

* `JawDrop*` — 控制下頜向下移動
* `MouthOpen*` — 控制嘴巴自身的張開變形

默認情況下，上頜保持固定，下頜在張嘴時移動。
:::

---

### **Reset Weight（重置權重）**

* **說明**：決定張嘴時 **Reset Clip** 中定義的其他混合形狀被重置的強度。
* **行為**：

  * `0`：張嘴時不進行重置。
  * `1`：指定的混合形狀會被完全重置。
  * 中間值則提供柔和的重置效果。

---

### **預覽**

* 可以在編輯器中直接測試調整，無需進入播放模式。

<div style="display: flex; gap: 1%; flex-wrap: wrap;">
  <video style="width: 49%;" autoplay muted loop playsinline>
    <source src="/mouth_tracking_settings_preview_at_jaw0.mp4" />
  </video>
  <video style="width: 49%;" autoplay muted loop playsinline>
    <source src="/mouth_tracking_settings_preview_at_jaw1.mp4" />
  </video>
</div>

## 創作者設定

::: warning
這些設定僅面向高級用戶，不建議手動調整。
必須與 Expression Menu、Controller 等其他資源保持一致。
若未正確配置，可能會導致功能異常。
:::

* **Parameters**
  分配用於處理口部追蹤相關表情參數的 `MA Parameter` 組件。

* **Reset Clip**
  定義下頜張開時需要重置的混合形狀的動畫剪輯。

* **Mouth Reset Weight Parameter**
  用於驅動重置混合形狀權重的參數名稱。
  示例：`FT/Settings/MouthResetWeight`

* **Jaw Drop Parameter**
  控制下頜下落強度的參數名稱。
  示例：`FT/Settings/JawDropStrength`