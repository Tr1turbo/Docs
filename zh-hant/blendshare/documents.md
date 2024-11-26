# ![BlendShare](/blendshare.png)
BlendShare 是一款 Unity 工具，專為需要分享型態鍵而不分發原始 FBX 檔案的創作者而設計。

該工具可以從 FBX 檔案中提取型態鍵並將其儲存為自訂資源格式：型態鍵資料。
這些資源可以輕鬆共享並應用於相容的 FBX 檔案。


## 提取器
按一下 **Tools -> BlendShare -> BlendShapes Extractor** 開啟型態鍵提取器。

- Origin FBX
  - 原始 FBX 檔。
- Source FBX
  - 新增了型態鍵的 FBX 檔案。
- Default Asset Name
 - 產生的 FBX 和網格的預設名稱。
- Deformer ID
  - FBX 中型態鍵的Deformer名稱。
  - Deformer就像一組型態鍵。
  - 如果使用者再次套用型態鍵，BlendShare 將刪除同名的舊Deformer。
  - 因此，如果您有較新版本的型態鍵，建議保持 Deformer ID 相同。
- 比較方法
  - **Name**
    - 按**名稱**進行比較。如果「Source FBX」中有新的型態鍵，BlendShare 會提取它們。
  - **Index**
    - 透過**索引**進行比較。如果型態鍵多於原始 FBX，BlendShare 將從尾部提取型態鍵。
  - **Custom**
    - 切換應單獨提取哪些型態鍵。

### **Custom**: 自訂提取
- 此方法可讓您透過開啟或關閉來手動選擇要提取的型態鍵。它提供了最大程度的控制，並能夠提取和覆蓋原始 FBX 中已存在的型態鍵。

- 如果右鍵單擊切換開關，將出現一個包含三個選項的上下文選單：`Select to End`、`Deselect to End` 和 `Select from Here`。此功能提供了一種有效管理多個型態鍵的快速方法。

- `Select to End` 將在型態鍵上從目前位置切換到結束。
- `Deselect to End`將關閉從目前位置到結束的型態鍵。
- 按一下 `Select from Here`，然後右鍵單擊並選擇 `Select to Here` 以切換從目前位置到選定末端的型態鍵。

## 型態鍵資料
按一下 `Apply blendshapes`(套用型態鍵) 將型態鍵直接新增到原始 FBX 檔案中。

按一下 `Apply blendshapes as new FBX`(將型態鍵套用為新 FBX) 以產生原始 FBX 的副本並將型態鍵新增至該副本。

即使原始 FBX 的法線、UV 和型態鍵被修改，您仍然可以將型態鍵套用到 FBX。

按一下 `Create Meshes`(建立網格) 以產生新增了型態鍵的網格資源。
這比產生 FBX 檔案更快，但有嚴格的限制，因為它不允許對原始 FBX 進行任何修改。