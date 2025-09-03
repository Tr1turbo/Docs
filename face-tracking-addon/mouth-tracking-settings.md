# <img class="dark-only" src="/mouth_tracking_settings_icon.png" alt="Mouth Tracking Settings" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> Mouth Tracking Settings



The **Mouth Tracking Settings** component controls how jaw movement and mouth blendshapes are processed during face tracking. It provides parameters for adjusting jaw strength and reset behavior.

![Mouth Tracking Settings](/mouth_tracking_settings.png)

## Parameters
### **Jaw Strength**
* **Description**: Controls the contribution of the jaw movement when the mouth opens.
* **Behavior**:

  * `0`: Only the mouth opens, no jaw drop.
  * `1`: Both the jaw and mouth open together.
  * Values in-between provide a blend of both effects.

<video width="480" autoplay muted loop playsinline>
  <source src="/mouth_tracking_settings_jaw_strength_slider.mp4" />
</video>

::: info
The blendshape that controls mouth opening and jaw drop is `JawOpen`.
Internally, `JawOpen` is divided into two contributing blend shapes:
- `JawDrop*` — controls the downward movement of the jaw.
- `MouthOpen*` — controls the deformation of the mouth opening itself.
By default, the upper jaw remains fixed while the lower jaw moves when the mouth opens.
:::

### **Reset Weight**

* **Description**: Determines how strongly the mouth opening resets other blendshapes defined in the **Reset Clip**.
* **Behavior**:

  * `0`: No reset occurs when the mouth opens.
  * `1`: Full reset of the specified blendshapes when the mouth opens.
  * Partial values provide softer reset blending.


---
### **Preview**

* Allows testing adjustments directly in the editor without entering Play Mode.

<div style="display: flex; gap: 1%; flex-wrap: wrap;">
  <video style="width: 49%;" autoplay muted loop playsinline>
    <source src="/mouth_tracking_settings_preview_at_jaw0.mp4" />
  </video>
  <video style="width: 49%;" autoplay muted loop playsinline>
    <source src="/mouth_tracking_settings_preview_at_jaw1.mp4" />
  </video>
</div>

## Creator Settings

::: warning
These settings are intended for advanced users and are not recommended to adjust manually.
They must be configured consistently with other assets such as the Expression Menu and Controller.
Changing these without proper setup may cause incorrect behavior.
:::

* **Parameters**
  Assign a `MA Parameter` component for handling expression parameters related to mouth tracking.

* **Reset Clip**
  Animation clip that defines which blendshapes should be reset when the jaw opens.

* **Mouth Reset Weight Parameter**
  Parameter name used to drive the reset blendshape weight.
  Example: `FT/Settings/MouthResetWeight`

* **Jaw Drop Parameter**
  Parameter name that controls jaw drop strength.
  Example: `FT/Settings/JawDropStrength`