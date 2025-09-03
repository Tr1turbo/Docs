# <img class="dark-only" src="/eye_tracking_settings_icon.png" alt="Eye Tracking Settings" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> <img class="light-only" src="/eye_tracking_settings_icon_light_mode.png" alt="Eye Tracking Settings" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> Eye Tracking Settings

Eye Tracking Settings is a component designed to make it easier for users to adjust settings for eye tracking.
You can adjust the following parameters:

**Eye Weight** and **Reset Weight**.

![Eye Tracking Settings](/eye_tracking_settings.png)

## Parameters
### **Eye Weight**
* **Description**: Controls the intensity of the **EyeClosed** blendshape used for eye tracking.
* **Behavior**:

  * `0`: No EyeClosed blendshape applied.
  * `1`: Full EyeClosed blendshape applied.
* **Usage**: Reduce this value if your avatar has smaller or customized eyes.

### **Reset Weight**
* **Description**: Defines the target intensity for resetting your customized eye shape back to default when the eyes are fully closed.
* **Behavior**:

  * `0`: No reset applied when the eyes are open.
  * `1`: Full reset applied when the eyes are fully closed.
  * The reset blend smoothly from open to closed.

These parameters allow fine-tuning of the eye tracking system, ensuring smooth and natural behavior across avatars with different eye shapes and proportions.

## Preview Button
The `Preview` button allows users to see a preview of the adjustments they make. Clicking the button will enter preview mode, and adjusting the parameter slider will also activate preview mode. To exit preview mode and save the results, users should click the button again. If the component loses focus, the preview mode will automatically exit and save the changes, but it is recommended to click the button to ensure everything is saved properly.

![Preview](/eye_tracking_settings_preview.png)

## Creator Settings
**Creator Settings** is an area that users should not modify as it may cause issues. This section is designed specifically for the face tracking creator.