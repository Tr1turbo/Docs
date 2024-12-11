# <img src="/face-tracking-addon/shinra/shinra_head_icon.png" alt="Shinra" style="width: 48px; height: 48px; vertical-align: -4px; display: inline;"/> 森羅面部追踪指南

有关安装说明，请参阅 [安装指南](../installation-guide)。

## 唇环和舌环的面部追踪

<img src="/face-tracking-addon/shinra/shinra_pierce.png" alt="Lip Piercings" style="width: 240px;"/>

1. 找到以下目录中的 [<img class="dark-only" src="/blendshare.png" alt="BlendShare" style="width: 96px; height: 24px; vertical-align: -5px; display: inline;"/><img class="light-only" src="/blendshare_light_mode.png" alt="BlendShare" style="width: 96px; height: 24px; vertical-align: -5px; display: inline;"/>](../blendshare) 资产：  
   - `Triturbo/Shinra_FT/Blendshapes/LipPierce_FT_BlendShare`  
   - `Triturbo/Shinra_FT/Blendshapes/TonguePierce_FT_BlendShare`  

2. 点击 **Create Meshes** 按钮生成网格：

   ![LipPierce_FT_BlendShare](/face-tracking-addon/shinra/lip_pierce_blendshare.png)

3. 将以下位置的预制件拖动到你的 Avatar 中：  
   - `Triturbo/Shinra_FT/Prefabs/Accessories/LipPierceChainFT`  
   - `Triturbo/Shinra_FT/Prefabs/Accessories/TonguePierceFT`  

   ![prefabs](/face-tracking-addon/shinra/prefabs.png)

4. 将生成的网格分配到预制件中对应的 `SkinnedMeshRenderer`。

## Cheek Suck 效果

Cheek Suck 效果需要额外的纹理。按照以下步骤启用该效果：

1. **根据所使用的着色器选择合适的材质：**  
   - **liltoon 着色器**: `Triturbo/Shinra_FT/Materials/Shinra_faceWhite`  
   - **Poiyomi 着色器**: `Triturbo/Shinra_FT/Materials/Shinra_faceWhite_poi`  

2. 将材质分配给 Avatar 的 Body 的 `SkinnedMeshRenderer`。  
![shinra_face_material](/face-tracking-addon/shinra/shinra_face_material.png)

1. 找到控制器文件：
   - `Triturbo/Shinra_FT/Controllers/FX - Mouth Tracking Extra (WD Off)`  

2. 调整吸脸图层的设置：
   - 点击 **Cheek_Suck** 图层旁的 **齿轮图标**。  
   - 将图层权重设置为 **1**。  
![cheek_suck](/face-tracking-addon/shinra/cheek_suck.png)

## Preset_default 补偿

默认情况下，Shinra 的型态键 `Preset_default` 的值为 **100**。如果需要调整此值，请按照以下步骤配置补偿系统：

1. 找到动画：  
   - `Triturbo/Shinra_FT/Animations/Reset/Preset_default_Compensate_Lower`  
   - `Triturbo/Shinra_FT/Animations/Reset/Preset_default_Compensate_Upper`  

2. 这两个动画的默认值均为 **100**。  
![preset_default_compensate_animation](/face-tracking-addon/shinra/preset_default_compensate_animation.png)

1. 根据 `Preset_default` 型态键的新值调整这些值。
