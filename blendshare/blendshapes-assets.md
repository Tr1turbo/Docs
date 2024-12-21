# <img class="dark-only" src="/blendshare_blendshapes_asset.png" alt="Blendshapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/><img class="light-only" src="/blendshare_blendshapes_asset_light_mode.png" alt="Blendshapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> BlendShapes Data Asset

<img class="dark-only" src="/blendshare.png" alt="BlendShare" style="width: 96px; height: 24px; vertical-align: -5px; display: inline;"/><img class="light-only" src="/blendshare_light_mode.png" alt="BlendShare" style="width: 96px; height: 24px; vertical-align: -5px; display: inline;"/> BlendShapes Data Assets is an asset that stores extracted blendshapes.

The asset does not contain original vertex properties; the blendshapes are extracted by calculating shape deformation.

Users can easily apply these blendshapes to compatible models.

## Import [<img class="dark-only" src="/blendshare.png" alt="BlendShare" style="width: 128px; height: 32px; vertical-align: -6px; display: inline;"/><img class="light-only" src="/blendshare_light_mode.png" alt="BlendShare" style="width: 128px; height: 32px; vertical-align: -6px; display: inline;"/>](./documents)

Before using the assets, ensure you have imported the BlendShare package. Check if the package creator has included the UnityPackage in the file. If it is not included, download it from one of the following sources:

1. [Booth](https://triturbo.booth.pm/items/5901276)
2. [GitHub](https://github.com/Tr1turbo/BlendShare/releases/latest)
3. [Add to VCC](https://tr1turbo.github.io/BlendShare/)

## Using the <img class="dark-only" src="/blendshare_blendshapes_asset.png" alt="Blendshapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/><img class="light-only" src="/blendshare_blendshapes_asset_light_mode.png" alt="Blend Shapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> Assets
1. Locate the Assets
   
    After importing the UnityPackage, navigate to the designated folder where the BlendShapes Data assets are stored.


2. Inspect the Asset
   
   Select the desired asset, then review its properties using the Unity Inspector.

    ![Blendshapes Data](/blendshapes_data_inspector.png)

3. Apply BlendShapes

    - Click `Apply blendshapes` to add blendshapes directly to the original FBX file.

    - Click `Apply blendshapes as new FBX` to generate a copy of original FBX and add blendshapes to the copy.
        ::: tip
        Even if the Normals, UVs, and blendshapes of the original FBX are modified, you can still apply blendshapes to FBX.
        :::
    - Click `Create Meshes` to generate a mesh asset with blendshapes added.
    This is faster than generating an FBX file but has strict limits, as it does **not allow any modification** of the original FBX.

1. Using Generated Meshes

    When using the `Apply blendshapes as new FBX` or `Create Meshes` option, replace the current mesh in the `SkinnedMeshRenderer` component with the newly generated mesh.


## Broken BlendShapes
If the mesh is not visible after blendshapes applied, check if you used a modified FBX, which might have a different bone count from the original model.

If you notice broken blendshapes after installation, use an unmodified FBX to generate the mesh.

::: tip
**To avoid failures when adding blend shapes to a modified FBX, please note the following:**

- Do not delete vertices in the relevant mesh, and avoid adding vertices. This can cause vertex order inconsistencies.
- If blendshapes appear wrong direction, use Blender’s native exporter.
- Match FBX export Scaling settings with the original model and consider `Apply Transform` options carefully.
  - If the Unity FBX importing settings reads **1m (File) to 1m (Unity)**, select `FBX Unit Scale` in Blender.
  - If the Unity FBX importing settings reads **1cm (File) to 0.01m (Unity)**, use `All Local`.

  - Avoid selecting `Apply Transform`; if blendshapes are wrong direction, try selecting `Apply Transform` as a last resort.
    ![Blender Export](/blender_fbx_export_transform.png)

**Permitted Changes:**
- Add bones and edit weights
- Add or edit blend shapes
- Edit UVs
- Edit normals
- Freely modify unrelated meshes
:::