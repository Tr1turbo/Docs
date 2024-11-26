![BlendShare](/blendshare_light_mode.png){.light-only}
![BlendShare](/blendshare.png){.dark-only}

BlendShare 是一款 Unity 工具，专为需要分享型态键而不分发原始 FBX 档案的创作者而设计。

该工具可以从 FBX 档案中提取型态键并将其储存为自订资源格式：型态键资料。
这些资源可以轻松共享并应用于相容的 FBX 档案。


## 提取器
按一下 **Tools -> BlendShare -> BlendShapes Extractor** 开启型态键提取器。

- Origin FBX
  - 原始 FBX 档。
- Source FBX
  - 新增了型态键的 FBX 档案。
- Default Asset Name
 - 产生的 FBX 和网格的预设名称。
- Deformer ID
  - FBX 中型态键的Deformer名称。
  - Deformer就像一组型态键。
  - 如果使用者再次套用型态键，BlendShare 将删除同名的旧Deformer。
  - 因此，如果您有较新版本的型态键，建议保持 Deformer ID 相同。
- 比较方法
  - **Name**
    - 按**名称**进行比较。如果「Source FBX」中有新的型态键，BlendShare 会提取它们。
  - **Index**
    - 透过**索引**进行比较。如果型态键多于原始 FBX，BlendShare 将从尾部提取型态键。
  - **Custom**
    - 切换应单独提取哪些型态键。

### **Custom**: 自订提取
- 此方法可让您透过开启或关闭来手动选择要提取的型态键。它提供了最大程度的控制，并能够提取和复盖原始 FBX 中已存在的型态键。

- 如果右键单击切换开关，将出现一个包含三个选项的上下文选单：`Select to End`、`Deselect to End` 和 `Select from Here`。此功能提供了一种有效管理多个型态键的快速方法。

- `Select to End` 将在型态键上从目前位置切换到结束。
- `Deselect to End`将关闭从目前位置到结束的型态键。
- 按一下 `Select from Here`，然后右键单击并选择 `Select to Here` 以切换从目前位置到选定末端的型态键。

## 型态键资料
按一下 `Apply blendshapes`(套用型态键) 将型态键直接新增到原始 FBX 档案中。

按一下 `Apply blendshapes as new FBX`(将型态键套用为新 FBX) 以产生原始 FBX 的副本并将型态键新增至该副本。

即使原始 FBX 的法线、UV 和型态键被修改，您仍然可以将型态键套用到 FBX。

按一下 `Create Meshes`(建立网格) 以产生新增了型态键的网格资源。
这比产生 FBX 档案更快，但有严格的限制，因为它不允许对原始 FBX 进行任何修改。