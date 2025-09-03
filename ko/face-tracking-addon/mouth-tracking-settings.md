# <img class="dark-only" src="/mouth_tracking_settings_icon.png" alt="Mouth Tracking Settings" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> 입 추적 설정

**입 추적 설정(Mouth Tracking Settings)** 컴포넌트는 얼굴 추적 중 턱 움직임과 입 블렌드셰이프가 처리되는 방식을 제어합니다. 턱의 강도와 리셋 동작을 조정하는 파라미터를 제공합니다.

![Mouth Tracking Settings](/mouth_tracking_settings.png)

## 파라미터

### **턱 강도 (Jaw Strength)**

* **설명**: 입이 열릴 때 턱 움직임이 얼마나 반영되는지를 제어합니다.
* **동작**:

  * `0`: 입만 열리고 턱은 내려가지 않음.
  * `1`: 턱과 입이 함께 열림.
  * 중간 값: 두 효과가 혼합되어 적용됨.

<video width="480" autoplay muted loop playsinline>
  <source src="/mouth_tracking_settings_jaw_strength_slider.mp4" />
</video>

::: info
입 열림을 제어하는 블렌드셰이프는 `JawOpen`입니다.
내부적으로 `JawOpen`은 두 가지 기여 블렌드셰이프로 나뉩니다:

* `JawDrop*` — 턱이 아래로 내려가는 움직임을 제어
* `MouthOpen*` — 입이 실제로 벌어지는 변형을 제어

기본적으로, 입이 열릴 때 위턱은 고정된 상태에서 아래턱만 움직입니다.
:::

### **리셋 가중치 (Reset Weight)**

* **설명**: 입이 열릴 때 \*\*리셋 클립(Reset Clip)\*\*에 정의된 다른 블렌드셰이프가 얼마나 강하게 초기화되는지를 결정합니다.
* **동작**:

  * `0`: 입이 열려도 리셋 없음.
  * `1`: 입이 열릴 때 지정된 블렌드셰이프가 완전히 리셋됨.
  * 중간 값: 부드럽게 리셋 블렌딩이 적용됨.



### **미리보기 (Preview)**

* 플레이 모드에 들어가지 않고도 에디터에서 직접 조정을 테스트할 수 있습니다.

<div style="display: flex; gap: 1%; flex-wrap: wrap;">
  <video style="width: 49%;" autoplay muted loop playsinline>
    <source src="/mouth_tracking_settings_preview_at_jaw0.mp4" />
  </video>
  <video style="width: 49%;" autoplay muted loop playsinline>
    <source src="/mouth_tracking_settings_preview_at_jaw1.mp4" />
  </video>
</div>

## 제작자 설정 (Creator Settings)

::: warning
이 설정은 고급 사용자를 위한 것이며 수동 조정을 권장하지 않습니다.
표정 메뉴(Expression Menu)나 컨트롤러와 같은 다른 애셋과 일관되게 구성되어야 합니다.
올바른 설정 없이 변경할 경우 잘못된 동작이 발생할 수 있습니다.
:::

* **파라미터 (Parameters)**
  입 추적과 관련된 표현 파라미터를 처리하기 위해 `MA Parameter` 컴포넌트를 할당합니다.

* **리셋 클립 (Reset Clip)**
  턱이 열릴 때 리셋될 블렌드셰이프가 정의된 애니메이션 클립입니다.

* **입 리셋 가중치 파라미터 (Mouth Reset Weight Parameter)**
  리셋 블렌드셰이프 가중치를 제어하는 파라미터 이름입니다.
  예: `FT/Settings/MouthResetWeight`

* **턱 드롭 파라미터 (Jaw Drop Parameter)**
  턱 드롭 강도를 제어하는 파라미터 이름입니다.
  예: `FT/Settings/JawDropStrength`
