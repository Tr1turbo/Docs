# <img src="/face-tracking-addon/shinra/shinra_head_icon.png" alt="Shinra" style="width: 48px; height: 48px; vertical-align: -4px; display: inline;"/> 신라 페이스 트래킹 가이드

설치 절차에 대해서는 [설치 가이드](../installation-guide)를 참조하세요.

## 립 피어싱 및 혀 피어싱 페이스 트래킹

<img src="/face-tracking-addon/shinra/shinra_pierce.png" alt="Lip Piercings" style="width: 240px;"/>

1. 다음 디렉토리에서 [<img class="dark-only" src="/blendshare.png" alt="BlendShare" style="width: 96px; height: 24px; vertical-align: -5px; display: inline;"/><img class="light-only" src="/blendshare_light_mode.png" alt="BlendShare" style="width: 96px; height: 24px; vertical-align: -5px; display: inline;"/>](../blendshare) 에셋을 찾으세요:  
   - `Triturbo/Shinra_FT/Blendshapes/LipPierce_FT_BlendShare`  
   - `Triturbo/Shinra_FT/Blendshapes/TonguePierce_FT_BlendShare`  

2. **Create Meshes** 버튼을 클릭하여 메쉬를 생성하세요:

   ![LipPierce_FT_BlendShare](/face-tracking-addon/shinra/lip_pierce_blendshare.png)

3. 다음 경로에서 프리팹을 아바타에 드래그하세요:  
   - `Triturbo/Shinra_FT/Prefabs/Accessories/LipPierceChainFT`  
   - `Triturbo/Shinra_FT/Prefabs/Accessories/TonguePierceFT`  

   ![prefabs](/face-tracking-addon/shinra/prefabs.png)

4. 생성된 메쉬를 프리팹 내의 해당 `SkinnedMeshRenderer`에 할당하세요.

## Cheek Suck 효과

Cheek Suck 효과에는 추가 텍스처가 필요합니다. 다음 단계를 따라 활성화하세요:

1. **사용 중인 셰이더에 따라 적합한 머티리얼을 선택하세요:**  
   - **liltoon 셰이더 사용 시**: `Triturbo/Shinra_FT/Materials/Shinra_faceWhite`  
   - **Poiyomi 셰이더 사용 시**: `Triturbo/Shinra_FT/Materials/Shinra_faceWhite_poi`  

2. 머티리얼을 아바타의 Body `SkinnedMeshRenderer`에 할당하세요.  
![shinra_face_material](/face-tracking-addon/shinra/shinra_face_material.png)

1. 컨트롤러 파일을 찾으세요:  
   - `Triturbo/Shinra_FT/Controllers/FX - Mouth Tracking Extra (WD Off)`  

2. Cheek Suck 레이어 설정을 조정하세요:  
   - **Cheek_Suck** 레이어 옆의 **기어 아이콘**을 클릭하세요.  
   - 레이어의 가중치를 **1**로 설정하세요.  
![cheek_suck](/face-tracking-addon/shinra/cheek_suck.png)

## 프리셋 기본 보정

기본적으로 Shinra의 쉐이프 키 `Preset_default`는 **100**으로 설정되어 있습니다. 이 값을 조정하려면 다음 단계를 따라 보정 시스템을 설정하세요:

1. 애니메이션 클립을 찾으세요:  
   - `Triturbo/Shinra_FT/Animations/Reset/Preset_default_Compensate_Lower`  
   - `Triturbo/Shinra_FT/Animations/Reset/Preset_default_Compensate_Upper`  

2. 두 클립 모두 기본값으로 **100**으로 설정되어 있습니다.  
![preset_default_compensate_animation](/face-tracking-addon/shinra/preset_default_compensate_animation.png)

1. `Preset_default` 쉐이프 키의 업데이트된 값에 맞춰 이 값을 조정하세요.
