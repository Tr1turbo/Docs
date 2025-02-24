# <img class="dark-only" src="/blendshare.png" alt="BlendShare" style="width: 192px; height: 48px; vertical-align: -9px; display: inline;"/> <img class="light-only" src="/blendshare_light_mode.png" alt="BlendShare" style="width: 192px; height: 48px; vertical-align: -9px; display: inline;"/> の使用方法

:::info
**BlendShare** は、オリジナルのFBXファイルを配布することなくシェイプキーを共有したいクリエイター向けに設計されたUnityパッケージです。\
このツールを使用すると、FBXファイルからシェイプキーを抽出し、カスタムアセットフォーマット「BlendShape Data」に保存できます。\
これらのアセットは簡単に共有され、互換性のあるFBXファイルに適用することができます。
:::

## ❓ 変更されたFBXにフェイストラッキングのシェイプキーを追加できますか？

**はい！** 1つの頂点も削除していなければ、元のFBXと同じメッシュと見なされます。\
（フェイストラッキングはFBXの「Body」（顔メッシュ）にのみシェイプキーを追加するため、他のメッシュを自由に編集できます。）

あなた自身のシェイプキーを追加したり、FBXのUVを変更したりしても、**BlendShare**は変更されたFBXにシェイプキーを追加できます。

---

## ❓ フェイストラッキングのシェイプキーを含むFBXファイルをどこで手に入れることができますか？

このアドオンはシェイプキーを追加する最も速い方法としてメッシュアセットのみを生成します。FBXファイルを生成するには、以下の手順を実行してください。

1. `Triturbo/xxx_FT/Blendshapes/xxx_FT_BlendShare` にある **BlendShare** データアセットファイルを見つけます。

2. アセットをクリックしてインスペクターで検査します。

3. `Apply blendshapes as new FBX` をクリックすると、シェイプキーが追加されたFBXファイルが得られます。
![新しいアバターとしてフェイストラッキングを適用](/apply_blendshapes_as_new_fbx.png)