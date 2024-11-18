# <img src="/triturbo_logo.png" alt="Triturbo" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> Face Tracking Addon Installation Guide
## Import dependent assets & packages
- [<img src="/modular_avatar_icon.png" alt="Triturbo" style="width: 24px; height: 24px; vertical-align: -4px; display: inline;"/>](https://modular-avatar.nadena.dev/) Modular Avatar (≥1.19)
- Original Avatar
- **BlendShare**:\
  a blendshapes extract and distribute tool I developed.\
*Included in file*
![blendshare](/blendshare_unitypackage.png)
## Import the Face Tracking Addon
- Download contents from the [Booth store](https://triturbo.booth.pm/)
- Import `.unitypackage` to your project

A new menu `TriturboFT` will appear after import.
![triturbo_ft](/triturbo_ft.png)

Click the buttom at menu to open the window.
![ft_window](./assets/ft_window.png)

Drag your Avatar *GameObject* or *Prefab* into `Avatar` field.
![ft_window](./assets/ft_window_avatar.png)

Finally, click `Apply Face Tracking Addon`.

:::tip
💡 If you don't want to modify the original avatar *GameObject*,
click `Apply Face Tracking as New Avatar` instead.
:::
An avatar with **face tracking addon** will appear in *Hierarchy*.
![avatar_hierarchy](/avatar_hierarchy.png)

## How to get the FBX file?
If you need to obtain the FBX file for further modifications, please refer to the following article.

[I need an FBX file with face tracking blendshapes, where can I get it?](./blendshare)

## Preset Options
During installation, you will see multiple preset options to choose from, including:
- HD
- HD (VIVE)
- HD (Quest, Pico)
- SD

The preset options may vary depending on the version, with more or fewer options available, each with different settings. However, all follow the naming conventions.  
HD and SD refer to **resolution** differences, with HD offering higher resolution but requiring more synced parameters. The device name in parentheses indicate optimization for specific devices; if no device is listed, it is the general version, using more parameters to ensure the best performance across all devices.  
> If you have multiple devices, it is recommended to select the general version.

::: details ⚙ Parameter Resolution
Because face tracking requires a large number of parameters and uses Expression Parameters for network synchronization, VRChat has a limit of 256 bits for this.  
- `Bool` parameters require `1` bit.  
- `Int` and `Float` require `8` bits.  

We use parameter quantization techniques to reduce the bit size needed for floating-point numbers.  
:::

### Differences between VIVE and Quest, Pico versions
- VIVE uses SRanipal parameters, which, compared to Quest and Pico devices:
  - For the eyes, VIVE lacks eyebrow detection but includes pupil diameter detection.
  - For the mouth, VIVE lacks detection for MouthDimple, MouthStretch, and NoseSneer.

::: info 💡 The above description only applies specifically to the **VIVE Pro Eye** device.
- **VIVE Focus 3 + Facial Expression Detection Kit**
- **VIVE Focus Vision**
- **VIVE XR Elite + Full-Face Detection Kit**

None of the above devices support pupil diameter detection, nor do they support `EyeWide` and `EyeSquint`. In terms of mouth capture, all VIVE devices perform similarly.
:::