# <img src="/eye_tracking_settings_icon.png" alt="Eye Tracking Settings" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> Eye Tracking Settings

Eye Tracking Settings is a component designed to make it easier for users to adjust settings for eye tracking.
You can adjust the following parameters: Eye Weight and Reset Weight.


## Parameters

**Eye Weight** represents the intensity of the `EyeClosed` blendshape for eye tracking. Reduce the value if you have customized eyes that are smaller than the default.

**Reset Weight** represents the target intensity of setting your customized eye shape to default when your eyes are fully closed.
When the eye is open, the intensity is 0, and it will gradually blend to the target value you set when the eyes are closed.

These settings help in fine-tuning the eye tracking experience, ensuring it works seamlessly with different eye shapes and sizes.


## Preview Button
The Preview button allows users to see a preview of the adjustments they make. Clicking the button will enter preview mode, and adjusting the parameter slider will also activate preview mode. To exit preview mode and save the results, users should click the button again. If the component loses focus, the preview mode will automatically exit and save the changes, but it is recommended to click the button to ensure everything is saved properly.

## Creator Settings
**Creator Settings** is an area that users should not modify as it may cause issues. This section is designed specifically for the facetracking creator.