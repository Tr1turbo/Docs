# Advanced: How to use <img src="/blendshare.png" alt="BlendShare" style="width: 192px; height: 48px; vertical-align: -9px; display: inline;"/>

:::info
**BlendShare** is an Unity package designed for creators who need to share blendshapes without distributing the original FBX files.\
This tool enables the extraction of blendshapes from FBX files and stores them in a custom asset format: `BlendShape Data`.\
These assets can be easily shared and applied to compatible FBX files.
:::


### ❓ Can I add face tracking blendshapes to a modified FBX?


**Yes!** As long as you didn’t delete a single vertex, it can be consider the same mesh as original FBX.\
(Since FaceTracking only add blendshapes to “Body”(face mesh) to the FBX, you can edit other meshes as you want.)

You can add your own blendshapes, modify UVs of your FBX and **BlendShare** can still add blendshapes to your modified FBX.

---
<!-- #region get-fbx -->
### ❓ I need an FBX file with face tracking blendshapes, where can I get it?

The addon will only generate mesh assets because it is the fastest way to add blendshapes.You will need to follow the steps below to generate an FBX file.

1. Locate the **BlendShare** data asset file at `Triturbo/xxx_FT/Blendshapes/xxx_FT_BlendShare`.

2. Click the asset and inspect with Inspector.

3. Click `Apply blendshapes as new FBX`, then you will get a FBX file with blendshapes added.
![Apply Face Tracking as New Avatar](/apply_blendshapes_as_new_fbx.png)
<!-- #endregion get-fbx -->