# <img src="/triturbo_logo.png" alt="Triturbo" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> 顔追跡アドオンのインストールガイド
## 依存するアセットとパッケージのインポート
- [<img src="/modular_avatar_icon.png" alt="Triturbo" style="width: 24px; height: 24px; vertical-align: -4px; display: inline;"/>](https://modular-avatar.nadena.dev/) Modular Avatar (≥1.19)
- アバター本体
- **BlendShare**：私が開発したシェイプキーの抽出と配布ツール。\
*ファイルに含まれています*
![blendshare](/blendshare_unitypackage.png)

## 顔追跡アドオンのインポート
- **コンテンツのダウンロード**\
[Booth](https://triturbo.booth.pm/) からコンテンツをダウンロードしてください。
- **Unity パッケージのインポート**\
`.unitypackage` をインポートしてください。

インポート後、新しいメニューが表示されます。
![triturbo_ft](/triturbo_ft.png)

メニューのボタンをクリックしてウィンドウを開いてください。
![ft_window](./assets/ft_window.png)

アバターのGameObjectまたはPrefabを`アバター`フィールドにドラッグしてください。
![ft_window](./assets/ft_window_avatar.png)

最後に、`元のアバターにフェストラを作成する`をクリックしてください。

:::info
💡 オリジナルのアバターGameObjectを変更したくない場合は、代わりに`新しいアバターにフェストラを作成する`をクリックしてください。
:::

顔追跡アドオン付きのアバターがHierarchyに表示されます。
![avatar_hierarchy](/avatar_hierarchy.png)

## FBXファイルの取得方法  
FBXファイルを取得してさらに変更を加える場合は、以下の記事をご参照ください。\
[フェイストラッキング用のブレンドシェイプ付きFBXファイルが必要です。どこで入手できますか？](blendshare)

## プリセットオプション  
インストール時に、以下のような複数のプリセットオプションが表示されます：
- HD
- HD (VIVE)
- HD (Quest, Pico)
- SD

プリセットオプションはバージョンによって異なり、設定が多かったり少なかったりしますが、全て名前付け規則に従います。  
HDとSDは**解像度**の違いを指し、HDはより高解像度で、より多くの同期パラメーターを必要とします。カッコ内のデバイス名は特定のデバイスに最適化されていることを示します。デバイス名がない場合は汎用バージョンで、全デバイスで最高のパフォーマンスを確保するために多くのパラメーターを使用します。  
> 複数のデバイスをお持ちの場合は、汎用バージョンを選択することをお勧めします。

::: details ⚙ パラメーター解像度  
フェイストラッキングには多くのパラメーターが必要で、ネットワーク同期にはExpression Parametersを使用します。VRChatの上限は256ビットです。  
- `Bool`パラメーターは`1`ビットを使用します。  
- `Int`および`Float`は`8`ビットを使用します。

浮動小数点数のビットサイズを削減するために、パラメーター量子化技術を使用しています。  
:::

### VIVE、Quest、Picoバージョンの違い  
VIVE は SRanipal パラメーターを使用しますが、Quest および Pico デバイスにはアイトラッキングの機能が少ないです。具体的には、VIVE は眉の検出をサポートしていますが、Quest および Pico デバイスはサポートしていません。また、VIVE は瞳孔直径のトラッキングも可能です。

口のトラッキングに関しては、VIVE には MouthDimple、MouthStretch、NoseSneer といった機能がありますが、QuestやPicoにはありません。

::: info 💡 上記の説明は特に **VIVE Pro Eye** デバイスに該当します。  
- VIVE Focus 3 + Facial Expression Tracking Kit  
- VIVE Focus Vision  
- VIVE XR Elite + Full-Face Tracking Kit  
これらのデバイスは瞳孔直径トラッキングをサポートしていません。  
また、`EyeWide`（目を大きく開ける）や`EyeSquint`（目を細める）もサポートしていません。  
すべてのVIVEデバイスは口のトラッキングにおいては同等のパフォーマンスを示します。  
:::