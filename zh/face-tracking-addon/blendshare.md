# 進階: 如何使用 <img src="/blendshare.png" alt="BlendShare" style="width: 192px; height: 48px; vertical-align: -9px; display: inline;"/>

:::info
**BlendShare** 是一個為需要分享型態鍵但不想分發原始 FBX 文件的創作者設計的 Unity 插件。該工具能夠從 FBX 文件中提取型態鍵並將它們存儲在一個自定義的資產格式中: BlendShape Data。
這些資產可以輕鬆地共享並應用到兼容的 FBX 文件中。
:::


### ❓ 我可以將面部追蹤型態鍵添加到修改過的 FBX 中嗎？


**可以！** 只要你沒有刪除任何頂點，它就可以被視為與原始 FBX 相同的網格。(由於面部追蹤僅向 FBX 的「Body」(面部網格)添加型態鍵，你可以隨意編輯其他網格。)

你可以添加自己的型態鍵，修改 FBX 的 UV，並且 **BlendShare** 仍然可以將混合形狀添加到你的修改過的 FBX 中。


### ❓ 我需要一個帶有面部追蹤 Blendshapes 的 FBX，在哪裡可以得到它？


插件只會生成網格資產，因為這是添加混合形狀最快的方法。
你需要按照以下步驟生成一個 FBX 文件。

找到 `Triturbo/xxx_FT/Blendshapes/xxx_FT_BlendShare` 路徑下的 **BlendShare** 資料資產文件。

點擊該資產並在檢查器中查看。

點擊 `Apply blendshapes as new FBX`，然後你將得到一個添加了混合形狀的 FBX 文件。
![Apply Face Tracking as New Avatar](/apply_blendshapes_as_new_fbx.png)