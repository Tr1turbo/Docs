# 进阶: 如何使用 <img class="dark-only" src="/blendshare.png" alt="BlendShare" style="width: 192px; height: 48px; vertical-align: -9px; display: inline;"/> <img class="light-only" src="/blendshare_light_mode.png" alt="BlendShare" style="width: 192px; height: 48px; vertical-align: -9px; display: inline;"/>

:::info
**BlendShare** 是一个为需要分享型态键但不想分发原始 FBX 文件的创作者设计的 Unity 插件。该工具能够从 FBX 文件中提取型态键并将它们存储在一个自定义的资产格式中: BlendShape Data。
这些资产可以轻松地共享并应用到兼容的 FBX 文件中。
:::


## ❓ 我可以将面部追踪型态键添加到修改过的 FBX 中吗？


**可以！** 只要你没有删除任何顶点，它就可以被视为与原始 FBX 相同的网格。(由于面部追踪仅向 FBX 的「Body」(面部网格)添加型态键，你可以随意编辑其他网格。)

你可以添加自己的型态键，修改 FBX 的 UV，并且 **BlendShare** 仍然可以将型态键添加到你的修改过的 FBX 中。


## ❓ 我需要一个带有面部追踪 Blendshapes 的 FBX，在哪里可以得到它？


插件只会生成网格资产，因为这是添加型态键最快的方法。
你需要按照以下步骤生成一个 FBX 文件。

找到 `Triturbo/xxx_FT/Blendshapes/xxx_FT_BlendShare` 路径下的 **BlendShare** 资料资产文件。

点击该资产并在检查器中查看。

点击 `Apply blendshapes as new FBX`，然后你将得到一个添加了型态键的 FBX 文件。
![Apply Face Tracking as New Avatar](/apply_blendshapes_as_new_fbx.png)