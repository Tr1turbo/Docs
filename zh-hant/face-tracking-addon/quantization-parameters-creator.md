# 量化參數創建器

量化參數創建器 (Quantization Parameters Creator) 是一個非破壞性工具，用於創建二進制參數(binary parameters)以減少同步參數。

[**二進制參數**](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/parameters/types/binary) 指的是一種參數系統，[VRCFaceTracking](https://docs.vrcft.io/) 用於通過一組 **Bool** 參數發送跟踪數據，這些參數代表一個浮點參數。

![眼瞼](/qpc_eyelid.png)

## 解析度設置
用戶可以為每個參數設置解析度。更高的解析度需要更多的同步參數。所需的同步參數數量可以在 `Parameters: {num} bits` 部分查看。

## 組合參數
某些參數具有 `Combined Remote` 和 `Combined Local` 選項，表示這些參數可以合併以簡化。
例如，*EyeLidLeft* 和 *EyeLidRight* 可以合併為 *EyeLid*，其值為 *EyeLidLeft* 和 *EyeLidRight* 的平均值。

- **Combined Remote:**
僅遠程合併參數。選擇此選項可以減少一半的同步參數需求。
- **Combined Local:**
僅本地合併參數。選擇此選項不會影響同步參數需求。

## 縮放因子
縮放因子可用於根據用戶需求調整參數值。例如，如果用戶覺得眼睛張得不夠大，他們可以增加 EyeLidLeft 和 EyeLidRight 的縮放因子。