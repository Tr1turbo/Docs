# <img src="/face-tracking-addon/shinra/shinra_head_icon.png" alt="Shinra" style="width: 48px; height: 48px; vertical-align: -4px; display: inline;"/> 森羅面部追蹤指南

有關安裝說明，請參閱 [安裝指南](../installation-guide)。

## 唇環與舌環的臉部追蹤

<img src="/face-tracking-addon/shinra/shinra_pierce.png" alt="Lip Piercings" style="width: 240px;"/>

1. 找到以下目錄中的[<img class="dark-only" src="/blendshare.png" alt="BlendShare" style="width: 96px; height: 24px; vertical-align: -5px; display: inline;"/><img class="light-only" src="/blendshare_light_mode.png" alt="BlendShare" style="width: 96px; height: 24px; vertical-align: -5px; display: inline;"/>](../blendshare) 資產：
 - `Triturbo/Shinra_FT/Blendshapes/LipPierce_FT_BlendShare`
 - `Triturbo/Shinra_FT/Blendshapes/TonguePierce_FT_BlendShare`

2. 點選 **Create Meshes** 按鈕產生網格：

 ![LipPierce_FT_BlendShare](/face-tracking-addon/shinra/lip_pierce_blendshare.png)

3. 將以下位置的預製件拖曳到你的 Avatar 中：
 - `Triturbo/Shinra_FT/Prefabs/Accessories/LipPierceChainFT`
 - `Triturbo/Shinra_FT/Prefabs/Accessories/TonguePierceFT`

 ![prefabs](/face-tracking-addon/shinra/prefabs.png)

4. 將產生的網格分配到預製件中對應的 `SkinnedMeshRenderer`。

## Cheek Suck 效果

Cheek Suck 效果需要額外的紋理。請依照下列步驟啟用該效果：

1. **根據所使用的著色器選擇合適的材質：**
 - **liltoon 著色器**: `Triturbo/Shinra_FT/Materials/Shinra_faceWhite`
 - **Poiyomi 著色器**: `Triturbo/Shinra_FT/Materials/Shinra_faceWhite_poi`

2. 將材質分配給 Avatar 的 Body 的 `SkinnedMeshRenderer`。
![shinra_face_material](/face-tracking-addon/shinra/shinra_face_material.png)

1. 找到控制器檔案：
 - `Triturbo/Shinra_FT/Controllers/FX - Mouth Tracking Extra (WD Off)`

2. 調整吸臉圖層的設定：
 - 點選 **Cheek_Suck** 圖層旁的 **齒輪圖示**。
 - 將圖層權重設定為 **1**。
![cheek_suck](/face-tracking-addon/shinra/cheek_suck.png)

## Preset_default 補償

預設情況下，Shinra 的型態鍵 `Preset_default` 的值為 **100**。如果需要調整此值，請依照下列步驟配置補償系統：

1. 找到動畫：
 - `Triturbo/Shinra_FT/Animations/Reset/Preset_default_Compensate_Lower`
 - `Triturbo/Shinra_FT/Animations/Reset/Preset_default_Compensate_Upper`

2. 這兩個動畫的預設值都是 **100**。
![preset_default_compensate_animation](/face-tracking-addon/shinra/preset_default_compensate_animation.png)

1. 根據 `Preset_default` 型態鍵的新值調整這些值。