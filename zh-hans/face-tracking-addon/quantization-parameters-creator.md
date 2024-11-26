# 量化参数创建器

<ruby>量化参数创建器<rt>Quantization Parameters Creator</rt></ruby> 是一个非破坏性工具，用于创建 <ruby>二进制参数<rt>Binary Parameters</rt></ruby> 以减少同步参数。

[**二进制参数**](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/parameters/types/binary) 指的是一种参数系统，[VRCFaceTracking](https://docs.vrcft.io/) 用于通过一组 **Bool** 参数发送跟踪数据，这些参数代表一个浮点参数。

![眼睑](/qpc_eyelid.png)

## 分辨率设置
用户可以为每个参数设置分辨率。更高的分辨率需要更多的同步参数。所需的同步参数数量可以在 `Parameters: {num} bits` 部分查看。

## 组合参数
某些参数具有 `Combined Remote` 和 `Combined Local` 选项，表示这些参数可以合併以简化。
例如，*EyeLidLeft* 和 *EyeLidRight* 可以合併为 *EyeLid*，其值为 *EyeLidLeft* 和 *EyeLidRight* 的平均值。

- **Combined Remote:**
仅远程合併参数。选择此选项可以减少一半的同步参数需求。
- **Combined Local:**
仅本地合併参数。选择此选项不会影响同步参数需求。

## 缩放因子
缩放因子可用于根据用户需求调整参数值。例如，如果用户觉得眼睛张得不够大，他们可以增加 EyeLidLeft 和 EyeLidRight 的缩放因子。