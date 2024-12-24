# <img class="dark-only" src="/blendshare_blendshapes_asset.png" alt="Blendshapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/><img class="light-only" src="/blendshare_blendshapes_asset_light_mode.png" alt="Blendshapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> 쉐이프키 데이터 에셋

쉐이프키 데이터 에셋은 추출된 쉐이프키를 저장하는 에셋입니다.

이 에셋은 원래 정점 속성을 포함하지 않으며, 쉐이프키는 형태 변형을 계산하여 추출됩니다.

사용자는 이러한 쉐이프키를 호환 가능한 모델에 쉽게 적용할 수 있습니다.

## [<img class="dark-only" src="/blendshare.png" alt="BlendShare" style="width: 128px; height: 32px; vertical-align: -6px; display: inline;"/><img class="light-only" src="/blendshare_light_mode.png" alt="BlendShare" style="width: 128px; height: 32px; vertical-align: -6px; display: inline;"/>](./documents) 임포트

에셋을 사용하기 전에 BlendShare 패키지를 가져왔는지 확인하십시오. 패키지 제작자가 파일에 `unitypackage` 를 포함했는지 확인하십시오. 포함되어 있지 않다면 다음 출처 중 하나에서 다운로드하십시오:

1. [Booth](https://triturbo.booth.pm/items/5901276)
2. [GitHub](https://github.com/Tr1turbo/BlendShare/releases/latest)
3. [Add to VCC](https://tr1turbo.github.io/BlendShare/)


## <img class="dark-only" src="/blendshare_blendshapes_asset.png" alt="Blendshapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/><img class="light-only" src="/blendshare_blendshapes_asset_light_mode.png" alt="Blend Shapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> 에셋 사용하기

1. 에셋 위치 찾기

   UnityPackage를 가져온 후, BlendShapes Data 에셋이 저장된 지정된 폴더로 이동하세요.

2. 에셋 확인하기

   원하는 에셋을 선택한 후, Unity Inspector를 사용하여 속성을 확인하세요.

   ![Blendshapes Data](/blendshapes_data_inspector.png)

3. 쉐이프키 적용하기

   - `Apply blendshapes`를 클릭하여 원본 FBX 파일에 쉐이프키를 직접 추가합니다.

   - `Apply blendshapes as new FBX`를 클릭하여 원본 FBX 파일을 복사한 후, 복사본에 쉐이프키를 추가합니다.
     ::: tip
     원본 FBX의 Normals, UVs, 쉐이프키가 수정되었더라도 FBX에 쉐이프키를 추가할 수 있습니다.
     :::
   - `Create Meshes`를 클릭하여 쉐이프키가 추가된 메시 에셋을 생성합니다.
     이 옵션은 FBX 파일을 생성하는 것보다 빠르지만, **원본 FBX 수정이 불가능**하다는 엄격한 제한이 있습니다.

4. 생성된 메시 사용하기

   `Apply blendshapes as new FBX` 또는 `Create Meshes` 옵션을 사용한 경우, `SkinnedMeshRenderer` 컴포넌트에서 현재 메시를 새로 생성된 메시로 교체하세요.

## 깨진 쉐이프키

쉐이프키를 적용한 후 메시가 보이지 않는 경우, 원본 모델과 다른 본 개수를 가진 수정된 FBX를 사용했는지 확인하세요.

설치 후 깨진 쉐이프키가 발견되면 수정되지 않은 FBX를 사용하여 메시를 생성하세요.

::: tip
**수정된 FBX에 쉐이프키를 추가할 때 실패를 방지하려면 다음을 유의하세요:**

- 관련 메시에서 정점을 삭제하거나 추가하지 마세요. 이는 정점 순서 불일치를 초래할 수 있습니다.
- 쉐이프키가 잘못된 방향으로 나타날 경우, Blender의 기본 내보내기 기능을 사용하세요.
- FBX 내보내기 스케일 설정을 원본 모델과 일치시키고 `Apply Transform` 옵션을 신중히 고려하세요.
  - Unity FBX 가져오기 설정에서 **1m (파일) to 1m (Unity)** 로 읽히면 Blender에서 `FBX Unit Scale` 을 선택하세요.
  - Unity FBX 가져오기 설정에서 **1cm (파일) to 0.01m (Unity)** 로 읽히면 `All Local` 을 사용하세요.

  - `Apply Transform` 선택을 피하세요. 쉐이프키가 잘못된 방향일 경우, 최후의 수단으로 `Apply Transform` 을 선택하세요.
    ![Blender Export](/blender_fbx_export_transform.png)

**허용되는 변경 사항:**
- 본 추가 및 가중치 편집
- 쉐이프키 추가 또는 편집
- UV 편집
- 노멀 편집
- 관련 없는 메시 자유롭게 수정
:::
