# <img class="dark-only" src="/blendshare_blendshapes_asset.png" alt="Blendshapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/><img class="light-only" src="/blendshare_blendshapes_asset_light_mode.png" alt="Blendshapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> シェイプキーデータアセット

<img class="dark-only" src="/blendshare.png" alt="BlendShare" style="width: 96px; height: 24px; vertical-align: -5px; display: inline;"/><img class="light-only" src="/blendshare_light_mode.png" alt="BlendShare" style="width: 96px; height: 24px; vertical-align: -5px; display: inline;"/> シェイプキーデータアセットは、抽出されたシェイプキーを保存するアセットです。

このアセットには元の頂点プロパティは含まれておらず、シェイプキーは形状変形を計算することによって抽出されます。

ユーザーはこれらのシェイプキーを互換性のあるモデルに簡単に適用できます。

## [<img class="dark-only" src="/blendshare.png" alt="BlendShare" style="width: 128px; height: 32px; vertical-align: -6px; display: inline;"/><img class="light-only" src="/blendshare_light_mode.png" alt="BlendShare" style="width: 128px; height: 32px; vertical-align: -6px; display: inline;"/>](./documents) をインポート 

アセットを使用する前に、BlendShareパッケージをインポートしていることを確認してください。パッケージの作成者がファイルに`Unitypackage`を含めているか確認してください。含まれていない場合は、以下のいずれかのソースからダウンロードしてください：

1. [Booth](https://triturbo.booth.pm/items/5901276)
2. [GitHub](https://github.com/Tr1turbo/BlendShare/releases/latest)
3. [Add to VCC](https://tr1turbo.github.io/BlendShare/)

## <img class="dark-only" src="/blendshare_blendshapes_asset.png" alt="Blendshapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/><img class="light-only" src="/blendshare_blendshapes_asset_light_mode.png" alt="Blend Shapes Data" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> アセットの使用
1. アセットを探す
   
    `Unitypackage`をインポートした後、シェイプキーデータアセットが保存されている指定されたフォルダーを開きます。

2. アセットを検査する
   
   希望のアセットを選択し、Unityインスペクターを使用してそのプロパティを確認します。

    ![Blendshapes Data](/blendshapes_data_inspector.png)

3. シェイプキーを適用する

    - `Apply blendshapes`をクリックして、元のFBXファイルに直接シェイプキーを追加します。

    - `Apply blendshapes as new FBX`をクリックして、元のFBXのコピーを生成し、そのコピーにシェイプキーを追加します。
        ::: tip
        元のFBXの法線、UV、およびシェイプキーが変更されていても、FBXにシェイプキーを適用できます。
        :::
    - `Create Meshes`をクリックして、シェイプキーが追加されたメッシュアセットを生成します。
    これはFBXファイルを生成するよりも速いですが、元のFBXの**変更を許可しない**という厳しい制限があります。

1. 生成されたメッシュの使用

    `Apply blendshapes as new FBX`または`Create Meshes`オプションを使用する際は、`SkinnedMeshRenderer`コンポーネント内の現在のメッシュを新しく生成されたメッシュに置き換えます。

## 壊れたシェイプキー

シェイプキーを適用した後にメッシュが表示されない場合、元のモデルと異なるボーン数を持つ変更された FBX を使用している可能性があります。

インストール後にシェイプキーが壊れている場合は、未変更の FBX を使用してメッシュを生成してください。


::: tip
**変更された FBX にブレンドシェイプを追加する際の失敗を回避するための注意点：**

- 関連するメッシュの頂点を削除しないでください。また、頂点を追加しないようにしてください。これにより頂点順序が一致しなくなる可能性があります。
- ブレンドシェイプの方向が正しくない場合は、Blender のデフォルトエクスポーターを使用してください。
- FBX のエクスポートスケーリング設定を元のモデルと一致させ、`Apply Transform` オプションを慎重に検討してください。
  - Unity の FBX インポート設定が **1m (File) to 1m (Unity)** と表示される場合は、Blender で `FBX Unit Scale` を選択してください。
  - Unity の FBX インポート設定が **1cm (File) to 0.01m (Unity)** と表示される場合は、`All Local` を使用してください。

  - `Apply Transform` は選択しないでください。ブレンドシェイプの方向が正しくない場合、最終手段として `Apply Transform` を選択してください。
    ![Blender Export](/blender_fbx_export_transform.png)

**安全な変更:**
- ボーンの追加やウェイトの編集
- ブレンドシェイプの追加や編集
- UV の編集
- 法線の編集
- 関連しないメッシュの自由な変更
- :::