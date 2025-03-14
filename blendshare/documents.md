![BlendShare](/blendshare_light_mode.png){.light-only}
![BlendShare](/blendshare.png){.dark-only}

BlendShare is an Unity tool designed for creators who need to share blendshapes without distributing the original FBX files.

This tool enables the extraction of blendshapes from FBX files and stores them in a custom asset format: BlendShape Data.
These assets can be easily shared and applied to compatible FBX files.


## Extractor
Click **Tools -> BlendShare -> BlendShapes Extractor** to open Blendshapes extractor.

![blendshare_blendshapes_extractor](/blendshare_blendshapes_extractor.png)
- Origin FBX
    - The original FBX file.
- Source FBX
    - FBX file with added blendshapes.
- Default Asset Name
    - The default name for generated FBX and mesh.
- Weld BlendShape Vertices
  - Enable this option if the FBX import setting "Weld Vertices" is toggled on.
  - This will merge the BlendShape vertex deltas to ensure the vertex count remains consistent, preventing discrepancies when "Weld Vertices" is applied. This process ensures that the Unity mesh generated maintains a uniform vertex count, avoiding any unintended differences in vertex structure.
- Deformer ID
    - The deformer name of your blendshapes in FBX.
    - A deformer is like a group of blendshapes.
    - BlendShare will delete the old deformer with the same name if the user applies blendshapes again.
    - Therefore, it is recommended that if you have a newer version of the blendshapes, keep the Deformer ID the same.
- Compare Method
    - **Name**
        - Compare by **name**. If there are new blendshapes in the `Source FBX`, BlendShare will extract them.
    - **Index**
        - Compare by **index**. If there are more blendshapes than the Original FBX, BlendShare will extract blendshapes from the tail end.
    - **Custom**
        - Toggle which blendshapes should be extracted individually.

### Custom Extraction
- This method allows you to manually select which blendshapes to extract by toggling them on or off. It provides the most control and gives the ability to extract and override blendshapes that already exist in the original FBX.

- If you right-click the toggle, a context menu with three options will appear: `Select to End`, `Deselect to End`, and `Select from Here`. This feature provides a quick way to manage multiple blendshapes efficiently.

- `Select to End` will toggle on blendshapes from the current position to the end.
- `Deselect to End` will toggle off blendshapes from the current position to the end.
- Click `Select from Here`, then right-click and select `Select to Here` to toggle on blendshapes from the current position to the selected end.


## <img class="dark-only" src="/blendshare_blendshapes_asset.png" alt="Blendshapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/><img class="light-only" src="/blendshare_blendshapes_asset_light_mode.png" alt="Blendshapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> BlendShapes Data Asset

### What information extrcted from fbx is stored inside the <img class="dark-only" src="/blendshare_blendshapes_asset.png" alt="Blendshapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/><img class="light-only" src="/blendshare_blendshapes_asset_light_mode.png" alt="Blendshapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> asset?
- Blendshape Vertex Offsets:\
  Each array storing vertex offsets for a blendshape in the original vertex order.  
- Reference to Original FBX Object & Mesh:\
  Stores only the GUID, not the actual asset.  
- Unity Vertex Count & Hash:\
  Calculated from the Unity mesh to check consistency.

### Usage
![Blendshapes Data](/blendshapes_data_inspector.png)

Click `Apply blendshapes` to add blendshapes directly to the original FBX file.

Click `Apply blendshapes as new FBX` to generate a copy of original FBX and add blendshapes to the copy.

Even if the Normals, UVs, and blendshapes of the original FBX are modified, you can still apply blendshapes to FBX.

Click `Create Meshes` to generate a mesh asset with blendshapes added.
This is faster than generating an FBX file but has strict limits, as it does not allow any modification of the original FBX.

