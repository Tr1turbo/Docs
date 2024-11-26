# <img src="/eye_tracking_settings_icon.png" alt="Eye Tracking Settings" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> 眼动追踪设定

Eye Tracking Settings 是一个旨在让使用者更容易调整眼动追踪设定的组件。您可以调整以下参数：Eye Weight(眼睛权重) 和 Reset Weight (重置权重)。

![Eye Tracking Settings](/eye_tracking_settings.png)
## 参数
**眼睛权重** 代表 `EyeClosed` 型态键在眼动追踪中的强度。如果您的自订眼睛比预设值小，请减少该值。

**重设权重** 代表在眼睛完全闭合时将自订眼形重设为预设值的强度。当眼睛睁开时，重置权重为0，当眼睛闭合时，它会逐渐混合到您设定的目标值。

这些设定有助于微调眼动追踪体验，确保其与不同的眼形和大小无缝配合。


## 预览按钮
`Preview` 按钮可让使用者查看所做调整的预览。点击按钮将进入预览模式，调整参数滑杆也会启动预览模式。若要退出预览模式并储存结果，使用者应再次点击该按钮。如果元件失去焦点，预览模式将自动退出并储存更改，但建议点击按钮以确保一切都已储存。

![Preview](/eye_tracking_settings_preview.png)

## Creator Settings
**Creator Settings** 是一个使用者不应修改的区域，因为这可能会导致问题。此部分专为创作者设计。