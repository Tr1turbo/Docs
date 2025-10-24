# <img src="/triturbo_logo.png" alt="Triturbo" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> 페이셜트레킹 애드온 설치 가이드
## 에셋 및 패키지 임포트하기
- [<img src="/modular_avatar_icon.png" alt="Triturbo" style="width: 24px; height: 24px; vertical-align: -4px; display: inline;"/>](https://modular-avatar.nadena.dev/) 모듈러아바타 (≥1.9.0)
- 오리지널 아바타
- **BlendShare**：제작자가 개발한 블렌드쉐이프 추출 및 배포도구입니다.\
*페이셜 파일에 포함됨*
<img src="/blendshare_unitypackage.png" alt="blendshare" style="width: 256px; height: 32px; vertical-align: middle;"/>

- 신규: **Triturbo Face Tracking Framework**\
 ![chocolat booth download](/chocolat_booth_download.png)
  BOOTH에서 다운로드해 주세요. (일부 이전 애드온은 이 업데이트가 필요하지 않을 수 있습니다)
  BOOTH 다운로드 페이지에 표시되면 꼭 다운로드해 주세요.

## Face Tracking Addon 임포트
- **콘텐츠 다운로드**\
[Booth](https://triturbo.booth.pm/) 샵에서 패키지 다운로드.
- **Unity 패키지 임포트**\
프로젝트에 `.unitypackage` 임포트.

임포트 한 후 새 메뉴가 나타납니다.
![triturbo_ft](/triturbo_ft.png)

`TriturboFT` 메뉴를 클릭한 후 창을 열어주세요.
![ft_window](./assets/ft_window.png)

Hierarchy 에 있는 아바타 오브젝트나 프리팹을 상자로 끌어다 놓습니다.
![ft_window](./assets/ft_window_avatar.png)

마지막으로 페이스 트래킹 애드온 적용 을 클릭합니다.

:::info
💡 원래 아바타의 수정을 원하지 않으시면, `새 아바타로 페이스 트래킹 적용` 를 클릭합니다.
:::

페이셜이 적용되어있는 아바타가 Hierarchy 에 나옵니다.
![avatar_hierarchy](/avatar_hierarchy.png)

### 번역하다
[@ssoni_vrc](https://x.com/ssoni_vrc)
## FBX 파일 획득 방법  
FBX 파일을 획득하여 추가 수정을 하고 싶다면, 아래의 기사를 참고하세요.

[페이스 트래킹 블렌드셰이프가 포함된 FBX 파일이 필요합니다. 어디에서 구할 수 있나요?](./blendshare)

## 프리셋 옵션  
설치 시 다음과 같은 여러 프리셋 옵션이 표시됩니다:
- HD
- HD (VIVE)
- HD (Quest, Pico)
- SD

프리셋 옵션은 버전에 따라 달라지며, 설정이 더 많거나 적을 수 있지만, 모두 명명 규칙을 따릅니다.  
HD와 SD는 **해상도** 차이를 나타내며, HD는 더 높은 해상도를 제공하지만 더 많은 동기화 파라미터가 필요합니다. 괄호 안에 있는 장치 이름은 특정 장치에 최적화된 것을 나타내며, 장치 이름이 없는 경우에는 일반 버전으로, 모든 장치에서 최상의 성능을 보장하기 위해 더 많은 파라미터를 사용합니다.  
> 여러 장치를 가지고 있다면 일반 버전을 선택하는 것을 권장합니다.

::: details ⚙ 파라미터 해상도  
페이스 트래킹에는 많은 파라미터가 필요하며, 네트워크 동기화를 위해 Expression Parameters를 사용합니다. VRChat의 제한은 256비트입니다.  
- `Bool` 파라미터는 `1` 비트를 사용합니다.  
- `Int` 및 `Float`은 `8` 비트를 사용합니다.

우리는 부동소수점 숫자에 필요한 비트 크기를 줄이기 위해 파라미터 양자화 기술을 사용합니다.  
:::

### VIVE와 Quest, Pico 버전의 차이점
- VIVE는 SRanipal 파라미터를 사용하며, Quest와 Pico 장치와 비교했을 때:
  - 눈 부분에서는 눈썹 감지가 없고, 대신 동공 지름 감지가 있습니다.
  - 입 부분에서는 MouthDimple, MouthStretch, NoseSneer 감지가 없습니다.

::: info 💡 상기 설명은 **VIVE Pro Eye** 장비에만 해당됩니다.
- VIVE Focus 3 + Facial Expression Tracking Kit 
- VIVE Focus Vision  
- VIVE XR Elite + Full-Face Tracking Kit

위의 장비들은 동공 지름 감지를 지원하지 않으며, `EyeWide`(눈을 크게 뜨는 것)와 `EyeSquint`(눈을 찡그리는 것)도 지원하지 않습니다. 입 부분 감지에서는 모든 VIVE 장비가 기본적으로 동일한 성능을 보입니다.
:::

<!--@include: ../contact-us.md-->