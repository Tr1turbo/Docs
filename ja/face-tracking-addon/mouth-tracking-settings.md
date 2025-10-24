# <img class="dark-only" src="/mouth_tracking_settings_icon.png" alt="Mouth Tracking Settings" style="width: 32px; height: 32px; vertical-align: -4px; display: inline;"/> 口追跡設定

**口のトラッキング設定**コンポーネントは、フェイストラッキング中のあごの動きや口のブレンドシェイプの処理方法を制御します。あごの強さ、リセット動作、パラメータのバインディングを調整するための設定を提供します。

![Mouth Tracking Settings](/mouth_tracking_settings.png)

## パラメータ

### **Jaw Strength（あごの強さ）**

* **説明**: 口を開けたときのあごの動きへの影響度を制御します。
* **動作**:

  * `0`: 口だけが開き、あごは動きません。
  * `1`: あごと口が一緒に開きます。
  * 中間の値では両者の効果がブレンドされます。

<video width="500" height="500" autoplay muted loop playsinline>
  <source src="/mouth_tracking_settings_jaw_strength_slider.mp4" />
</video>

::: info
口の開閉とあごの動きを制御するブレンドシェイプは `JawOpen` です。
内部では `JawOpen` は次の2つのブレンドシェイプに分かれています:

* `JawDrop*` — あごの下方向の動きを制御します
* `MouthOpen*` — 口の開き自体の変形を制御します

デフォルトでは、口を開けるときに上あごは固定され、下あごが動きます。
:::

---

### **Reset Weight（リセットの強さ）**

* **説明**: 口を開いたときに **Reset Clip** で定義された他のブレンドシェイプをどの程度リセットするかを決定します。
* **動作**:

  * `0`: 口を開いてもリセットは行われません。
  * `1`: 指定されたブレンドシェイプが完全にリセットされます。
  * 中間の値では柔らかいリセットが行われます。

---

### **プレビュー**

* Playモードに入らず、エディター上で直接調整をテストできます。


## クリエイター向け設定

::: warning
これらの設定は上級者向けで、手動での調整は推奨されません。
Expression Menu や Controller などの他のアセットと整合性を保つ必要があります。
適切な設定なしに変更すると、正しく動作しない可能性があります。
:::

* **Parameters**
  口のトラッキングに関連する表情パラメータを扱う `MA Parameter` コンポーネントを割り当てます。

* **Reset Clip**
  あごを開いたときにリセットされるブレンドシェイプを定義したアニメーションクリップ。

* **Mouth Reset Weight Parameter**
  リセットブレンドシェイプの強さを制御するパラメータ名。
  例: `FT/Settings/MouthResetWeight`

* **Jaw Drop Parameter**
  あごの落下強さを制御するパラメータ名。
  例: `FT/Settings/JawDropStrength`
