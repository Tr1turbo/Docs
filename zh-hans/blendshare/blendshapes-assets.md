# <img class="dark-only" src="/blendshare_blendshapes_asset.png" alt="Blendshapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/><img class="light-only" src="/blendshare_blendshapes_asset_light_mode.png" alt="Blendshapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> 型态键数据资产

<img class="dark-only" src="/blendshare.png" alt="BlendShare" style="width: 96px; height: 24px; vertical-align: -5px; display: inline;"/><img class ="light-only" src="/blendshare_light_mode.png" alt="BlendShare" style="width: 96px; height: 24px; vertical-align: -5px; display: inline;"/> BlendShapes 资产是一种存储提取的型态键的资产。

该资产不包含原始顶点属性；型态键是通过计算形状变形提取的。

用户可以轻松地将这些型态键应用于兼容的模型。

## 导入 [<img class="dark-only" src="/blendshare.png" alt="BlendShare" style="width: 128px; height: 32px; vertical-align: -6px; display: inline;"/><img class="light-only" src="/blendshare_light_mode.png" alt="BlendShare" style="width: 128px; height: 32px; vertical-align: -6px; display: inline;"/>](./documents)

在使用资产之前，请确保您已导入 BlendShare。检查资产作者是否在文件中包含了 `unitypackage`。如果未包含，请从以下来源之一下载：

1. [Booth](https://triturbo.booth.pm/items/5901276)
2. [GitHub](https://github.com/Tr1turbo/BlendShare/releases/latest)
3. [添加到 VCC](https://tr1turbo.github.io/BlendShare/)

## 使用<img class="dark-only" src="/blendshare_blendshapes_asset.png" alt="Blendshapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/><img class="light-only" src="/blendshare_blendshapes_asset_light_mode.png" alt="Blend Shapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/>资产

1. 定位资产
   
   在导入 `unitypackage` 后，找到存储型态键数据资产的指定文件夹。

2. 检查资产

    选择所需的资产，然后使用 Unity 检查器查看其属性。
    ![Blendshapes 数据](/blendshapes_data_inspector.png)

3. 应用 BlendShapes

    - 点击 `Apply blendshapes` 直接将型态键添加到原始 FBX 文件中。

    - 点击 `Apply blendshapes as new FBX` 生成原始 FBX 的副本并将 型态键添加到副本中。
    ::: tip
    即使原始 FBX 的法线、UV 和型态键被修改，您仍然可以将 型态键应用于 FBX。
    :::
    - 点击 `Create Meshes` 生成一个添加了型态键的网格资产。
    这比生成 FBX 文件更快，但有严格的限制，因为它**不允许对原始 FBX 进行任何修改**。

4. 使用生成的网格

    当使用 `Apply blendshapes as new FBX` 或 `Create Meshes` 选项时，将 `SkinnedMeshRenderer` 组件中的当前网格替换为新生成的网格。

## 破损的型态键
如果在应用型态键后网格不可见，请检查您是否使用了修改过的 FBX，这可能与原始模型的骨骼数量不同。

如果您在安装后注意到型态键损坏，请使用未修改的 FBX 来生成网格。

:::tip
**为了避免在将混合形状添加到修改过的 FBX 时出现故障，请注意以下事项：**

- 不要删除相关网格中的顶点，并避免添加顶点。这可能会导致顶点顺序不一致。
- 如果混合形状方向错误，请使用 Blender 的原生导出器。
- 将 FBX 导出缩放设置与原始模型匹配，并仔细考虑 `Apply Transform` 选项。
 - 如果 Unity FBX 导入设置显示 **1m (File) to 1m (Unity)**，请在 Blender 中选择 `FBX Unit Scale`。
 - 如果 Unity FBX 导入设置显示 **1cm (File) to 0.01m (Unity)**，请使用 `All Local`。

 - 避免选择 `Apply Transform`；如果混合形状方向错误，请尝试将 `Apply Transform` 作为最后的手段。
 ![Blender Export](/blender_fbx_export_transform.png)

**允许的更改：**
- 添加骨骼和编辑权重
- 添加或编辑混合形状
- 编辑 UV
- 编辑法线
- 自由修改无关的网格
:::