# <img class="dark-only" src="/blendshare_blendshapes_asset.png" alt="Blendshapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/><img class="light-only" src="/blendshare_blendshapes_asset_light_mode.png" alt="Blendshapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> 型態鍵數據資產

<img class="dark-only" src="/blendshare.png" alt="BlendShare" style="width: 96px; height: 24px; vertical-align: -5px; display: inline;"/><img class="light-only" src="/blendshare_light_mode.png" alt="BlendShare" style="width: 96px; height: 24px; vertical-align: -5px; display: inline;"/> BlendShapes 資產是一種存儲提取的型態鍵的資產。

該資產不包含原始頂點屬性；型態鍵是通過計算形狀變形提取的。

用戶可以輕鬆地將這些型態鍵應用於兼容的模型。

## 導入 [<img class="dark-only" src="/blendshare.png" alt="BlendShare" style="width: 128px; height: 32px; vertical-align: -6px; display: inline;"/><img class="light-only" src="/blendshare_light_mode.png" alt="BlendShare" style="width: 128px; height: 32px; vertical-align: -6px; display: inline;"/>](./documents)

在使用資產之前，請確保您已導入 BlendShare。檢查資產作者是否在文件中包含了 `unitypackage`。如果未包含，請從以下來源之一下載：

1. [Booth](https://triturbo.booth.pm/items/5901276)
2. [GitHub](https://github.com/Tr1turbo/BlendShare/releases/latest)
3. [添加到 VCC](https://tr1turbo.github.io/BlendShare/)

## 使用<img class="dark-only" src="/blendshare_blendshapes_asset.png" alt="Blendshapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/><img class="light-only" src="/blendshare_blendshapes_asset_light_mode.png" alt="Blend Shapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/>資產

1. 定位資產

   在導入 `unitypackage` 後，找到存儲型態鍵數據資產的指定文件夾。

2. 檢查資產

   選擇所需的資產，然後使用 Unity 檢查器查看其屬性。

    ![Blendshapes 數據](/blendshapes_data_inspector.png)

3. 應用 BlendShapes

    - 點擊 `Apply blendshapes` 直接將型態鍵添加到原始 FBX 文件中。

    - 點擊 `Apply blendshapes as new FBX` 生成原始 FBX 的副本並將 型態鍵添加到副本中。
        ::: tip
        即使原始 FBX 的法線、UV 和型態鍵被修改，您仍然可以將 型態鍵應用於 FBX。
        :::
    - 點擊 `Create Meshes` 生成一個添加了型態鍵的網格資產。
    這比生成 FBX 文件更快，但有嚴格的限制，因為它**不允許對原始 FBX 進行任何修改**。

4. 使用生成的網格

    當使用 `Apply blendshapes as new FBX` 或 `Create Meshes` 選項時，將 `SkinnedMeshRenderer` 組件中的當前網格替換為新生成的網格。

## 破損的型態鍵
如果在應用型態鍵後網格不可見，請檢查您是否使用了修改過的 FBX，這可能與原始模型的骨骼數量不同。

如果您在安裝後注意到型態鍵損壞，請使用未修改的 FBX 來生成網格。

:::tip
**為了避免在將混合形狀添加到修改過的 FBX 時出現故障，請注意以下事項：**

- 不要刪除相關網格中的頂點，並避免添加頂點。這可能會導致頂點順序不一致。
- 如果混合形狀方向錯誤，請使用 Blender 的原生導出器。
- 將 FBX 導出縮放設置與原始模型匹配，並仔細考慮 `Apply Transform` 選項。
  - 如果 Unity FBX 導入設置顯示 **1m (File) to 1m (Unity)**，請在 Blender 中選擇 `FBX Unit Scale`。
  - 如果 Unity FBX 導入設置顯示 **1cm (File) to 0.01m (Unity)**，請使用 `All Local`。

  - 避免選擇 `Apply Transform`；如果混合形狀方向錯誤，請嘗試將 `Apply Transform` 作為最後的手段。
    ![Blender Export](/blender_fbx_export_transform.png)

**允許的更改：**
- 添加骨骼和編輯權重
- 添加或編輯混合形狀
- 編輯 UV
- 編輯法線
- 自由修改無關的網格
:::