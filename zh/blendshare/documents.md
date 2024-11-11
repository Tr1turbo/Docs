# ![BlendShare](/blendshare.png)
BlendShare 是一款 Unity 工具，專為需要共享 Blendshape 而不分發原始 FBX 檔案的創作者而設計。

該工具可以從 FBX 檔案中提取混合形狀並將其儲存為自訂資源格式：混合形狀資料。
這些資源可以輕鬆共享並應用於相容的 FBX 檔案。


# 提取器
按一下 **工具 -> BlendShare -> BlendShapes 擷取器** 開啟 Blendshapes 擷取器。

- 起源FBX
 - 原始 FBX 檔。
- 來源 FBX
 - 新增了混合形狀的 FBX 檔案。
- 預設資產名稱
 - 產生的 FBX 和網格的預設名稱。
- 變形器 ID
 - FBX 中混合形狀的變形器名稱。
 - 變形器就像一組混合形狀。
 - 如果使用者再次套用混合形狀，BlendShare 將刪除同名的舊變形器。
 - 因此，如果您有較新版本的混合形狀，建議保持變形器 ID 相同。
- 比較方法
 - **姓名**
 - 按**名稱**進行比較。如果「Source FBX」中有新的混合形狀，BlendShare 會提取它們。
 - **指數**
 - 透過**索引**進行比較。如果混合形狀多於原始 FBX，BlendShare 將從尾部提取混合形狀。
 - **風俗**
 - 切換應單獨提取哪些混合形狀。

## 自訂提取
- 此方法可讓您透過開啟或關閉來手動選擇要提取的混合形狀。它提供了最大程度的控制，並能夠提取和覆蓋原始 FBX 中已存在的混合形狀。

- 如果右鍵單擊切換開關，將出現一個包含三個選項的上下文選單：「選擇到結束」、「取消選擇到結束」和「從此處選擇」。此功能提供了一種有效管理多個混合形狀的快速方法。

- 「選擇到結束」將在混合形狀上從目前位置切換到結束。
-「取消選擇到結束」將關閉從目前位置到結束的混合形狀。
- 按一下“從此處選擇”，然後右鍵單擊並選擇“選擇到此處”以切換從目前位置到選定末端的混合形狀。

---

# 混合形狀數據

按一下「套用混合形狀」將混合形狀直接新增到原始 FBX 檔案中。

按一下「將混合形狀套用為新 FBX」以產生原始 FBX 的副本並將混合形狀新增至該副本。

即使原始 FBX 的法線、UV 和混合形狀被修改，您仍然可以將混合形狀套用到 FBX。

按一下「建立網格」以產生新增了混合形狀的網格資源。
這比產生 FBX 檔案更快，但有嚴格的限制，因為它不允許對原始 FBX 進行任何修改。