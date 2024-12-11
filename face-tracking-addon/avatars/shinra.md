# <img src="/face-tracking-addon/shinra/shinra_head_icon.png" alt="Shinra" style="width: 48px; height: 48px; vertical-align: -4px; display: inline;"/> Shinra Face Tracking Guide


For installation instructions, refer to the [Installation Guide](../installation-guide).


## Face Tracking for Lip and Tongue Piercings

<img src="/face-tracking-addon/shinra/shinra_pierce.png" alt="Lip Piercings" style="width: 240px;"/>

1. Locate the [<img class="dark-only" src="/blendshare.png" alt="BlendShare" style="width: 96px; height: 24px; vertical-align: -5px; display: inline;"/><img class="light-only" src="/blendshare_light_mode.png" alt="BlendShare" style="width: 96px; height: 24px; vertical-align: -5px; display: inline;"/>](../blendshare) assets in the following directories:  
   - `Triturbo/Shinra_FT/Blendshapes/LipPierce_FT_BlendShare`  
   - `Triturbo/Shinra_FT/Blendshapes/TonguePierce_FT_BlendShare`  

2. Click **Create Meshes** to generate the meshes: 

   ![LipPierce_FT_BlendShare](/face-tracking-addon/shinra/lip_pierce_blendshare.png)

3. Drag the prefabs from the following locations to your avatar:  
   - `Triturbo/Shinra_FT/Prefabs/Accessories/LipPierceChainFT`  
   - `Triturbo/Shinra_FT/Prefabs/Accessories/TonguePierceFT`  

   ![prefabs](/face-tracking-addon/shinra/prefabs.png)

4. Assign the generated mesh to the corresponding `SkinnedMeshRenderer` in the prefabs.



## Cheek Suck Effect

The Cheek Suck Effect uses an additional texture. Follow these steps to enable it:

1. **Choose the appropriate material for your shader:**  
   - For **liltoon shader**: `Triturbo/Shinra_FT/Materials/Shinra_faceWhite`  
   - For **Poiyomi shader**: `Triturbo/Shinra_FT/Materials/Shinra_faceWhite_poi`  

2. Assign the material to the `SkinnedMeshRenderer` from avatar's Body.
![shinra_face_material](/face-tracking-addon/shinra/shinra_face_material.png)

1. Locate to the controller file:  
   - `Triturbo/Shinra_FT/Controllers/FX - Mouth Tracking Extra (WD Off)`  

2. Adjust the Cheek Suck layer settings:  
   - Click the **gear icon** next to the **Cheek_Suck** layer.  
   - Set the layer weight to **1**.
![cheek_suck](/face-tracking-addon/shinra/cheek_suck.png)


## Preset Default Compensation

By default, the Shinra blendshape `Preset_default` is set to **100**. If you adjust this value, follow these steps to configure the compensation system:

1. Locate the animation clips:  
   - `Triturbo/Shinra_FT/Animations/Reset/Preset_default_Compensate_Lower`  
   - `Triturbo/Shinra_FT/Animations/Reset/Preset_default_Compensate_Upper`  

2. Both clips have a default value of **100**.  
![preset_default_compensate_animation](/face-tracking-addon/shinra/preset_default_compensate_animation.png)

3. Adjust these values to match the updated value of the `Preset_default` blendshape.