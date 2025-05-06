---
title: 【コメント】Javadocコメント【一覧】
published: 2025-04-18
description: 'Javadocの基本構文・主なタグ・記述ルールの一覧'
image: ''
tags: [コメント, Java]
category: 'テンプレート'
draft: false
lang: 'ja'
---

# Javadocコメントとは

**Javadocコメント**とは、Javaのクラス・メソッド・フィールドなどに付ける特別な形式のコメントで、Java標準のドキュメントツール「`javadoc`」によって**API仕様書として自動生成されるドキュメンテーションコメント**です。

Javadocコメントは、Javaのコードの理解を助け、**クラスの設計意図、使い方、引数や戻り値の説明、例外、制約などを明示的に記述する**ために用います。特に**外部に公開されるAPI設計や、チーム開発における共有知識の整備**に役立ちます。

```java
/**
 * ユーザー情報を管理するクラスです。
 * データベースと連携してユーザーを操作します。
 */
public class UserManager {
    // ...
}

```
---


## 基本構文（Javadocコメントの記述ルール）
```java
/**
 * 説明文（1行目に概要を簡潔に）
 *
 * 複数行の補足説明（任意）
 * 空行で区切ると見やすい
 *
 * @タグ名 説明（必要に応じて複数のタグを使用）
 */
```
```java
/**
 * このクラスは〜〜のためのユーティリティクラスです。
 *
 * @author Taro Tanaka
 * @version 1.2.0
 * @since 2024.12
 */
public class ExampleUtil {
    
    /**
     * 文字列を反転します。
     *
     * @param input 対象の文字列
     * @return 反転された文字列
     * @throws NullPointerException inputがnullの場合
     */
    public String reverse(String input) {
        ...
    }
}
````

* コメントは`/**`で始まり、`*/`で終わる
* 各行は`*`から始める（慣例）
* 最初の1文は\*\*概要説明文（1行要約）\*\*として処理される
* タグはその後にまとめて記述する

---
# Javadoc タグ一覧

Javadocで使用されるタグは、大きく分けて次の2種類に分類されます。

# ブロックタグの一覧（スタンドアロン・タグ） （@タグ名）

Java要素（クラス、メソッド、フィールドなど）に**説明を付加する目的で使用されるタグ**です。Javadocコメントの末尾に記述され、複数行にわたって情報を追加します。

| タグ名        | 説明                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| `@author`     | クラスやファイルの作成者を記述                                            |
| `@version`    | プログラムやAPIのバージョン情報を記述                                     |
| `@see`        | 関連する要素や参考文献、外部リンクを記述（例：`@see ClassName#method()`） |
| `@deprecated` | 非推奨であることを明記。使用しないことを推奨                              |
| `@since`      | このAPIがいつから導入されたかを明記（例：バージョン）                     |
| `@param`      | メソッドの引数の説明（引数名とその説明をセットで記述）                    |
| `@return`     | メソッドの戻り値の説明（`void`の場合は不要）                              |
| `@throws`     | メソッドがスローする例外とその理由（`@exception`と同義）                  |
| `@exception`  | `@throws`の別名（同義タグ）                                               |

---

# インラインタグの一覧 （{@タグ名}）

**コメント本文内で使用するタグ**です。コード内の説明にリンクや強調表示、定数値の表示などを挿入できます。

| タグ名          | 説明                                                                   |
| --------------- | ---------------------------------------------------------------------- |
| `{@link}`       | 指定したクラス・メソッドへのリンク（例：`{@link ClassName#method()}`） |
| `{@linkplain}`  | `{@link}`と同じだが、リンクテキストをプレーン表示（太字などなし）      |
| `{@literal}`    | 特殊文字（<, >, &, など）をエスケープしてそのまま表示                  |
| `{@code}`       | インラインコードを等幅フォントで表示（例：`{@code int count = 0;}`）   |
| `{@value}`      | 定数フィールドの値を表示（例：`{@value #CONSTANT_NAME}`）              |
| `{@docRoot}`    | ドキュメントルート（HTML出力の基点）への相対パス                       |
| `{@inheritDoc}` | スーパークラスやインターフェースからJavadocコメントを継承              |

---



# ブロックタグの使用例（@タグ）


### ◆ `@author`

* **用途**：クラスやファイルの作成者を明記
* **記述位置**：クラスやインターフェースのJavadoc内
* **使用例**：

```java
/**
 * ユーザー管理クラス
 * @author Tanaka Taro
 */
```

* **注意点**：

  * 複数名記載する場合は複数の`@author`を使う

---

### ◆ `@version`

* **用途**：APIやクラスのバージョン情報を記述
* **使用例**：

```java
/**
 * @version 1.0.3
 */
```

* **注意点**：

  * ソース管理システムがある場合は不要な場合も

---

### ◆ `@see`

* **用途**：関連項目・参考リンクを示す
* **使用例（内部参照）**：

```java
/**
 * @see UserService#createUser(String)
 */
```

* **使用例（外部リンク）**：

```java
/**
 * @see <a href="https://example.com/docs">仕様書</a>
 */
```

* **注意点**：

  * `<a>`タグで外部リンクを記述することも可能（Javadoc対応）

---

### ◆ `@deprecated`

* **用途**：非推奨（Deprecated）を示す
* **使用例**：

```java
/**
 * @deprecated このメソッドは非推奨です。代わりに {@link #newMethod()} を使用してください。
 */
```

* **注意点**：

  * `@Deprecated`アノテーションと併用すること
  * 代替手段を必ず明記する

---

### ◆ `@since`

* **用途**：いつから導入されたかのバージョン明示
* **使用例**：

```java
/**
 * @since 2.5
 */
```

---

### ◆ `@param`

* **用途**：メソッドの引数を説明
* **使用例**：

```java
/**
 * ユーザーを作成します。
 * @param name ユーザー名（null不可）
 * @param age 年齢（0以上）
 */
```

* **注意点**：

  * 引数の順番と一致させること
  * 型は書かない（JavaDocが自動取得）

---

### ◆ `@return`

* **用途**：メソッドの戻り値を説明
* **使用例**：

```java
/**
 * @return 作成されたユーザーID
 */
```

* **注意点**：

  * `void`の場合は省略可能

---

### ◆ `@throws` / `@exception`

* **用途**：スローする例外とその理由を記述
* **使用例**：

```java
/**
 * @throws IllegalArgumentException 引数が不正な場合
 * @throws IOException ファイル書き込みに失敗した場合
 */
```

* **注意点**：

  * `@throws` と `@exception` は同義（`@throws` 推奨）

---

# インラインタグの使用例（{@タグ名}）


### ◆ `{@link}`

* **用途**：他のクラスやメソッドへのリンクを挿入
* **使用例**：

```java
/**
 * このメソッドは {@link UserService#createUser(String)} を呼び出します。
 */
```

---

### ◆ `{@linkplain}`

* **用途**：リンク先はそのまま、\*\*表示をプレーン（通常文字）\*\*で行う
* **使用例**：

```java
/**
 * 詳しくは {@linkplain UserService#createUser(String) createUser} を参照してください。
 */
```

---

### ◆ `{@literal}`

* **用途**：HTML特殊文字などをそのまま表示
* **使用例**：

```java
/**
 * {@literal <html>} タグはHTMLの開始タグです。
 */
```

---

### ◆ `{@code}`

* **用途**：インラインコード表示（等幅フォント）
* **使用例**：

```java
/**
 * 例: {@code int result = sum(1, 2);}
 */
```

---

### ◆ `{@value}`

* **用途**：定数フィールドの**現在の値**を表示
* **使用例**：

```java
/**
 * デフォルトタイムアウトは {@value #DEFAULT_TIMEOUT} 秒です。
 */
```

* **注意点**：

  * 対象は`public static final`のみ

---

### ◆ `{@docRoot}`

* **用途**：HTMLドキュメントルートへの相対パス
* **使用例**：

```java
<!-- HTML内で使用 -->
<img src="{@docRoot}/images/logo.png" />
```

---

### ◆ `{@inheritDoc}`

* **用途**：親クラスやインターフェースのJavadocコメントを継承
* **使用例**：

```java
/**
 * {@inheritDoc}
 */
@Override
public void execute() { ... }
```

---


# HTML構文テンプレート（Javadocで使用可能）

```html
<p>段落</p>
<pre>整形済みコード</pre>
<code>インラインコード</code>
<blockquote>引用</blockquote>
<b>強調</b>, <i>イタリック</i>
```
Javadocコメント内では、以下のHTMLタグが使用可能です。

| HTMLタグ       | 用途                                       | 使用例                                           |
| -------------- | ------------------------------------------ | ------------------------------------------------ |
| `<p>`          | 段落分け（改行ではなく段落）               | `<p>この処理は〜〜です。</p>`                    |
| `<ul>`, `<li>` | 箇条書きリスト                             | `<ul><li>項目1</li><li>項目2</li></ul>`          |
| `<code>`       | コードの強調表示（インライン）             | `<code>int count = 0;</code>`                    |
| `<pre>`        | 複数行コードの整形表示                     | `<pre><code>System.out.println();</code></pre>`  |
| `<a href>`     | 外部リンクの挿入                           | `<a href="https://example.com">詳細はこちら</a>` |
| `<b>`, `<i>`   | 文字の強調（太字、斜体）                   | `<b>重要</b>` / `<i>注意</i>`                    |
| `<br>`         | 強制改行（非推奨。代わりに段落を使うこと） | `行1<br>行2`                                     |
---

# 推奨タグ構成テンプレート

```java
/**
 * ユーザー情報を取得します。
 *
 * <p>ユーザーIDに対応するユーザーが存在しない場合は例外がスローされます。</p>
 *
 * @param userId ユーザーの識別ID（null不可）
 * @return ユーザー情報オブジェクト {@link User}（存在しない場合はnull）
 * @throws UserNotFoundException ユーザーが見つからなかった場合
 * @since 1.0
 * @see UserService
 */
public User getUser(String userId) { ... }
```
---
# 補足：タグ構成の一例

```java
/**
 * 商品の価格を取得します。
 *
 * @param productId 商品ID（null不可）
 * @return 商品の価格（単位：円）
 * @throws ProductNotFoundException 商品が存在しない場合
 * @since 1.0
 * @see ProductService#getProductById(String)
 */
public int getPrice(String productId) { ... }
```


---

