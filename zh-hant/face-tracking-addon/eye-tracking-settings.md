# <img class="dark-only" src="/eye_tracking_settings_icon.png" alt="Eye Tracking Settings" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> <img class="light-only" src="/eye_tracking_settings_icon_light_mode.png" alt="Eye Tracking Settings" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> 眼動追蹤設定

<ruby>眼動追蹤設定<rt>Eye Tracking Settings</rt></ruby> 是一個旨在讓使用者更容易調整眼動追蹤設定的組件。您可以調整以下參數：

`Eye Weight`(眼睛權重) 和 `Reset Weight` (重置權重)。

![Eye Tracking Settings](/eye_tracking_settings.png)
## 參數
**眼睛權重** 代表 `EyeClosed` 型態鍵在眼動追蹤中的強度。如果您的自訂眼睛比預設值小，請減少該值。

**重設權重** 代表在眼睛完全閉合時將自訂眼形重設為預設值的強度。當眼睛睜開時，重置權重為0，當眼睛閉合時，它會逐漸混合到您設定的目標值。

這些設定有助於微調眼動追蹤體驗，確保其與不同的眼形和大小無縫配合。


## 預覽按鈕
`Preview` 按鈕可讓使用者查看所做調整的預覽。點擊按鈕將進入預覽模式，調整參數滑桿也會啟動預覽模式。若要退出預覽模式並儲存結果，使用者應再次點擊該按鈕。如果組件失去焦點，預覽模式將自動退出並儲存更改，但建議點擊按鈕以確保一切都已儲存。

![Preview](/eye_tracking_settings_preview.png)

## Creator Settings
**Creator Settings** 是一個使用者不應修改的區域，因為這可能會導致問題。此部分專為創作者設計。