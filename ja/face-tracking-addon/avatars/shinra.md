# <img src="/face-tracking-addon/shinra/shinra_head_icon.png" alt="Shinra" style="width: 48px; height: 48px; vertical-align: -4px; display: inline;"/> 森羅フェイストラッキングガイド

インストール手順については、[インストールガイド](../installation-guide)をご参照ください。

## リップピアスおよび舌ピアスのフェイストラッキング

<img src="/face-tracking-addon/shinra/shinra_pierce.png" alt="Lip Piercings" style="width: 240px;"/>

1. 以下のディレクトリにある [<img class="dark-only" src="/blendshare.png" alt="BlendShare" style="width: 96px; height: 24px; vertical-align: -5px; display: inline;"/><img class="light-only" src="/blendshare_light_mode.png" alt="BlendShare" style="width: 96px; height: 24px; vertical-align: -5px; display: inline;"/>](../blendshare) アセットを探します：  
   - `Triturbo/Shinra_FT/Blendshapes/LipPierce_FT_BlendShare`  
   - `Triturbo/Shinra_FT/Blendshapes/TonguePierce_FT_BlendShare`  

2. **Create Meshes** をクリックしてメッシュを生成します：

   ![LipPierce_FT_BlendShare](/face-tracking-addon/shinra/lip_pierce_blendshare.png)

3. 以下の場所からプレハブをアバターにドラッグします：  
   - `Triturbo/Shinra_FT/Prefabs/Accessories/LipPierceChainFT`  
   - `Triturbo/Shinra_FT/Prefabs/Accessories/TonguePierceFT`  

   ![prefabs](/face-tracking-addon/shinra/prefabs.png)

4. 生成されたメッシュをプレハブ内の対応する `SkinnedMeshRenderer` に割り当てます。

## Cheek Suck エフェクト

Cheek Suck エフェクトには、追加のテクスチャが必要です。以下の手順で有効化してください：

1. **使用するシェーダーに応じて適切なマテリアルを選択してください：**  
   - **liltoon シェーダーの場合**: `Triturbo/Shinra_FT/Materials/Shinra_faceWhite`  
   - **Poiyomi シェーダーの場合**: `Triturbo/Shinra_FT/Materials/Shinra_faceWhite_poi`  

2. マテリアルをアバターの Body の `SkinnedMeshRenderer` に割り当てます。  
![shinra_face_material](/face-tracking-addon/shinra/shinra_face_material.png)

1. コントローラーファイルを探します：  
   - `Triturbo/Shinra_FT/Controllers/FX - Mouth Tracking Extra (WD Off)`  

2. Cheek Suck レイヤーの設定を調整します：  
   - **Cheek_Suck** レイヤー横の **歯車アイコン** をクリックします。  
   - レイヤーのウェイトを **1** に設定します。  
![cheek_suck](/face-tracking-addon/shinra/cheek_suck.png)

## プリセットデフォルト補正

デフォルトでは、Shinra のシェイプキー `Preset_default` は **100** に設定されています。この値を調整する場合は、補正システムを以下の手順で設定してください：

1. アニメーションクリップを探します：  
   - `Triturbo/Shinra_FT/Animations/Reset/Preset_default_Compensate_Lower`  
   - `Triturbo/Shinra_FT/Animations/Reset/Preset_default_Compensate_Upper`  

2. 両方のクリップはデフォルト値として **100** に設定されています。  
![preset_default_compensate_animation](/face-tracking-addon/shinra/preset_default_compensate_animation.png)

1. `Preset_default` シェイプキーの更新値に合わせてこれらの値を調整してください。
