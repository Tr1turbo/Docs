# 量子化パラメータクリエーター

<ruby>量子化<rt>Quantization</rt> パラメータ<rt>Parameters</rt> クリエーター<rt>Creator</rt></ruby>は、同期パラメータを削減するための <ruby>バイナリ<rt>Binary</rt> パラメータ <rt>Parameters</rt></ruby> を作成する非破壊ツールです。

[**バイナリパラメータ**](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/parameters/types/binary)は、トラッキングデータを送信するために[VRCFaceTracking](https://docs.vrcft.io/)が使用するパラメータシステムを指し、浮動小数点パラメータを表す**Bool**パラメータのコレクションを通じて行われます。

![EyeLid](/qpc_eyelid.png)

## 解像度設定
ユーザーは各パラメータの解像度を設定できます。高い解像度はより多くの同期パラメータを必要とします。必要な同期パラメータの数は、`Parameters: {num} bits`セクションで確認できます⁠⁠。

## 組み合わせパラメータ
一部のパラメータには`Combined Remote`および`Combined Local`オプションがあり、これらのパラメータは簡略化のために統合できることを示しています。
例えば、*EyeLidLeft*と*EyeLidRight*は*EyeLid*に統合でき、その値は*EyeLidLeft*と*EyeLidRight*の平均になります⁠。

- **Combined Remote:**
リモートでのみパラメータを統合します。このオプションを選択すると、同期パラメータの要件が半分になります⁠。
- **Combined Local:**
ローカルでのみパラメータを統合します。このオプションを選択しても、同期パラメータの要件には影響しません⁠。

## スケールファクター
スケールファクターは、ユーザーのニーズに応じてパラメータ値を調整するために使用できます。例えば、ユーザーが目が十分に開かないと感じた場合、EyeLidLeftとEyeLidRightのスケールファクターを増加させることができます⁠。