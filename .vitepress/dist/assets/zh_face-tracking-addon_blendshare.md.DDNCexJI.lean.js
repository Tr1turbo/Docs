import{_ as e}from"./chunks/blendshare.f-uX6AqU.js";import{_ as t}from"./chunks/apply_blendshapes_as_new_fbx.CrHY_UEI.js";import{_ as r,c as n,a1 as s,o}from"./chunks/framework.BDxlaA_J.js";const b=JSON.parse('{"title":"進階: 如何使用","description":"","frontmatter":{},"headers":[],"relativePath":"zh/face-tracking-addon/blendshare.md","filePath":"zh/face-tracking-addon/blendshare.md"}'),l={name:"zh/face-tracking-addon/blendshare.md"};function d(i,a,p,h,c,B){return o(),n("div",null,a[0]||(a[0]=[s('<h1 id="進階-如何使用" tabindex="-1">進階: 如何使用 <img src="'+e+'" alt="BlendShare" style="width:192px;height:48px;vertical-align:-9px;display:inline;"> <a class="header-anchor" href="#進階-如何使用" aria-label="Permalink to &quot;進階: 如何使用 &lt;img src=&quot;/blendshare.png&quot; alt=&quot;BlendShare&quot; style=&quot;width: 192px; height: 48px; vertical-align: -9px; display: inline;&quot;/&gt;&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p><strong>BlendShare</strong> 是一個為需要分享型態鍵但不想分發原始 FBX 文件的創作者設計的 Unity 插件。該工具能夠從 FBX 文件中提取型態鍵並將它們存儲在一個自定義的資產格式中: BlendShape Data。 這些資產可以輕鬆地共享並應用到兼容的 FBX 文件中。</p></div><h3 id="❓-我可以將面部追蹤型態鍵添加到修改過的-fbx-中嗎" tabindex="-1">❓ 我可以將面部追蹤型態鍵添加到修改過的 FBX 中嗎？ <a class="header-anchor" href="#❓-我可以將面部追蹤型態鍵添加到修改過的-fbx-中嗎" aria-label="Permalink to &quot;❓ 我可以將面部追蹤型態鍵添加到修改過的 FBX 中嗎？&quot;">​</a></h3><p><strong>可以！</strong> 只要你沒有刪除任何頂點，它就可以被視為與原始 FBX 相同的網格。(由於面部追蹤僅向 FBX 的「Body」(面部網格)添加型態鍵，你可以隨意編輯其他網格。)</p><p>你可以添加自己的型態鍵，修改 FBX 的 UV，並且 <strong>BlendShare</strong> 仍然可以將混合形狀添加到你的修改過的 FBX 中。</p><h3 id="❓-我需要一個帶有面部追蹤-blendshapes-的-fbx-在哪裡可以得到它" tabindex="-1">❓ 我需要一個帶有面部追蹤 Blendshapes 的 FBX，在哪裡可以得到它？ <a class="header-anchor" href="#❓-我需要一個帶有面部追蹤-blendshapes-的-fbx-在哪裡可以得到它" aria-label="Permalink to &quot;❓ 我需要一個帶有面部追蹤 Blendshapes 的 FBX，在哪裡可以得到它？&quot;">​</a></h3><p>插件只會生成網格資產，因為這是添加混合形狀最快的方法。 你需要按照以下步驟生成一個 FBX 文件。</p><p>找到 <code>Triturbo/xxx_FT/Blendshapes/xxx_FT_BlendShare</code> 路徑下的 <strong>BlendShare</strong> 資料資產文件。</p><p>點擊該資產並在檢查器中查看。</p><p>點擊 <code>Apply blendshapes as new FBX</code>，然後你將得到一個添加了混合形狀的 FBX 文件。 <img src="'+t+'" alt="Apply Face Tracking as New Avatar"></p>',10)]))}const f=r(l,[["render",d]]);export{b as __pageData,f as default};
