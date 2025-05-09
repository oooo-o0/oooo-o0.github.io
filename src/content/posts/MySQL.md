---
title: 【コマンド】 MySQLチートシート【基本操作】
published: 2025-04-09
description: ' MySQLの基本操作コマンドと構文一覧'
image: ''
tags: [MySQL]
category: 'テンプレート'
draft: false 
lang: ''
---

# データベース操作とは

データベース操作とは、データベースに格納された情報に対して行う一連の処理のことです。基本的には以下の4つの操作（**CRUD**）に分類されます。

| 操作 | 英語     | 意味       | 代表的なSQL |
| -- | ------ | -------- | ------- |
| C  | Create | データの作成   | INSERT  |
| R  | Read   | データの読み取り | SELECT  |
| U  | Update | データの更新   | UPDATE  |
| D  | Delete | データの削除   | DELETE  |

これらの操作を通じて、アプリケーションはデータの追加、取得、変更、削除を行い、データベースとのやり取りを実現します。

---


# データ型一覧

| カテゴリ    | データ型の例                      | 説明                                         |
| ------- | --------------------------- | ------------------------------------------ |
| 数値型     | INT / INTEGER               | 整数値（例：1, 100, -50など）                       |
|         | BIGINT                      | 大きな整数（64bit）                               |
|         | SMALLINT / TINYINT          | 小さな整数（16bit / 8bitなど）                      |
|         | DECIMAL(p,s) / NUMERIC(p,s) | 小数（精度と桁数を指定する固定小数点）                        |
|         | FLOAT / REAL / DOUBLE       | 浮動小数点数（誤差を含む小数）                            |
| 文字列型    | CHAR(n)                     | 固定長の文字列（例：CHAR(10)は常に10文字）                 |
|         | VARCHAR(n)                  | 可変長の文字列（最大n文字）                             |
|         | TEXT                        | 長文テキストなどの大量の文字列                            |
| 日付・時刻型  | DATE                        | 日付（例：2025-05-09）                           |
|         | TIME                        | 時刻（例：13:45:00）                             |
|         | DATETIME / TIMESTAMP        | 日付と時刻の組み合わせ（例：2025-05-09 13:45:00）         |
|         | YEAR                        | 年（例：2025）                                  |
| 論理値型    | BOOLEAN / BOOL              | 真偽値（TRUE / FALSE）                          |
| バイナリ型   | BLOB / BINARY / VARBINARY   | バイナリデータ（画像・音声などの非テキストデータ）                  |
| 列挙・その他型 | ENUM                        | 決められた値の中から選択（例：'small', 'medium', 'large'） |
|         | JSON                        | 構造化データをJSON形式で格納                           |
|         | UUID                        | 一意な識別子（例：ユーザーIDなど）                         |



# 制約一覧（CONSTRAINTS）

| 制約名                   | キーワード                    | 説明                                                                 |
| --------------------- | ------------------------ | ------------------------------------------------------------------ |
| 主キー制約                 | PRIMARY KEY              | テーブルの中で各行を一意に識別する列。NULLを許容しない。一つのテーブルに1つだけ設定できる（複数列の複合主キーも可）。      |
| 外部キー制約                | FOREIGN KEY              | 他のテーブルの主キー（または一意キー）を参照する。参照整合性を保つ。                                 |
| 一意制約                  | UNIQUE                   | 列の値が他の行と重複しないように制限。NULLは複数許容される（DBMSによって動作が異なる）。                   |
| 非NULL制約               | NOT NULL                 | 列にNULLを格納することを禁止。必須入力列。                                            |
| デフォルト値制約              | DEFAULT                  | 値が指定されなかった場合に、自動的に設定される初期値。                                        |
| チェック制約                | CHECK                    | 列の値に任意の条件を設定する。例：CHECK (age >= 0)                                  |
| 自動採番                  | AUTO\_INCREMENT / SERIAL | 主に整数の主キーで使用され、自動的に連番を生成（MySQLではAUTO\_INCREMENT、PostgreSQLではSERIAL） |
| 一意インデックス              | UNIQUE INDEX             | 一意性を保証するインデックス。UNIQUE制約とほぼ同等。複数列でも可。                               |
| 複合キー制約                | PRIMARY KEY (col1, col2) | 複数の列の組み合わせで一意性を保証する（複合主キー）。                                        |
| 名前付き制約                | CONSTRAINT name ...      | 制約に任意の名前を付けることができる。例：CONSTRAINT chk\_age CHECK (age >= 0)          |
| ON DELETE / ON UPDATE | 外部キーの動作定義                | 外部キーで参照先のデータが削除・更新されたときの動作を定義（例：CASCADE, SET NULL, RESTRICT）       |


# 主な外部キーアクション一覧（ON DELETE / ON UPDATE）

| アクション       | 説明                                     |
| ----------- | -------------------------------------- |
| CASCADE     | 親テーブルの行が削除／更新されたら、子テーブルの行も連動して削除／更新される |
| SET NULL    | 親テーブルの行が削除／更新されたら、子テーブルの該当列をNULLにする    |
| SET DEFAULT | 子テーブルの該当列にデフォルト値を設定（対応していないRDBMSもある）   |
| RESTRICT    | 親テーブルの行が削除／更新されるのを禁止する（制限をかける）         |
| NO ACTION   | 削除／更新のタイミングで何もしない（RESTRICTに似る）         |



# SQLの演算子一覧（Operators）

## 1. 算術演算子（Arithmetic Operators）

| 演算子 | 意味       | 例      | 説明                  |
| --- | -------- | ------ | ------------------- |
| +   | 加算       | a + b  | 2つの値を加算する           |
| -   | 減算       | a - b  | 左辺から右辺を減算する         |
| \*  | 乗算       | a \* b | 2つの値を掛け算する          |
| /   | 除算       | a / b  | 左辺を右辺で割る            |
| %   | 剰余（モジュロ） | a % b  | 割り算の余りを求める（DBMSによる） |



## 2. 比較演算子（Comparison Operators）

| 演算子         | 意味          | 例                 | 説明                    |
| ----------- | ----------- | ----------------- | --------------------- |
| =           | 等しい         | a = b             | 値が等しいか判定              |
| <> または !=   | 等しくない       | a <> b, a != b    | 値が等しくないか判定            |
| >           | より大きい       | a > b             | 左辺が右辺より大きい            |
| <           | より小さい       | a < b             | 左辺が右辺より小さい            |
| >=          | 以上          | a >= b            | 左辺が右辺以上               |
| <=          | 以下          | a <= b            | 左辺が右辺以下               |
| BETWEEN     | 範囲内かどうか     | a BETWEEN x AND y | aがx以上かつy以下か           |
| IN          | 指定リストに含まれるか | a IN (x, y, z)    | 値が指定された複数の値の中に含まれているか |
| LIKE        | パターン一致      | name LIKE 'A%'    | 部分一致（ワイルドカード%や\_を使用）  |
| IS NULL     | NULLかどうか    | a IS NULL         | 値がNULLであるか判定          |
| IS NOT NULL | NULLでないか    | a IS NOT NULL     | 値がNULLでないか判定          |


## 3. 論理演算子（Logical Operators）

| 演算子 | 意味      | 例               | 説明               |
| --- | ------- | --------------- | ---------------- |
| AND | 両方の条件が真 | cond1 AND cond2 | 両方の条件を満たす場合に真    |
| OR  | いずれかが真  | cond1 OR cond2  | どちらか一方でも条件を満たせば真 |
| NOT | 否定      | NOT cond1       | 条件が満たされない場合に真    |



## 4. 集合演算子（Set Operators）

| 演算子       | 意味               | 説明                                  |
| --------- | ---------------- | ----------------------------------- |
| UNION     | 和集合（重複排除）        | 2つのSELECTの結果を結合し、重複行を除去             |
| UNION ALL | 和集合（重複を残す）       | 重複も含めて全ての結果を返す                      |
| INTERSECT | 積集合（共通部分）        | 両方のSELECTに共通する行のみ返す（MySQL非対応）       |
| EXCEPT    | 差集合（AにはあるがBにはない） | 最初のSELECTに存在し、2番目には存在しない行（MySQL非対応） |



## 5. その他の演算子・特殊構文

| 構文             | 意味               | 説明                         |
| -------------- | ---------------- | -------------------------- |
| EXISTS         | サブクエリの存在確認       | サブクエリの結果が存在するかどうか          |
| ANY / SOME     | 任意の値との比較         | 比較演算子と併用して部分一致を調べる         |
| ALL            | すべての値との比較        | 条件をすべての値に対して評価する           |
| CASE WHEN THEN | 条件分岐構文           | if-elseに相当                 |
| COALESCE       | NULLを別値で置き換える    | 最初にNULLでない値を返す             |
| NULLIF(a, b)   | a = b のときNULLを返す | aとbが等しい場合はNULL、そうでなければaを返す |




# 式一覧（Expressions）

## 比較・パターンマッチ式

| 式                   | 用途                       | 使用例                                   |
| ------------------- | ------------------------ | ------------------------------------- |
| =, !=, <, >, <=, >= | 値の比較                     | age > 20                              |
| LIKE                | ワイルドカード一致                | name LIKE 'T%'                        |
| NOT LIKE            | 一致しないワイルドカード             | name NOT LIKE '%x%'                   |
| GLOB                | UNIX風ワイルドカード一致（SQLite限定） | name GLOB 'T\*'                       |
| NOT GLOB            | GLOB一致しない（SQLite限定）      | name NOT GLOB '*abc*'                 |
| REGEXP              | 正規表現一致（MySQL等）           | name REGEXP '^A.\*'                   |
| NOT REGEXP          | 正規表現一致しない                | name NOT REGEXP '\[0-9]\$'            |
| SIMILAR TO          | SQL正規表現一致（PostgreSQL）    | name SIMILAR TO '\[A-Za-z]+\_\[0-9]+' |
| NOT SIMILAR TO      | SIMILAR TO一致しない          | name NOT SIMILAR TO 'test%'           |
| ESCAPE              | LIKEにおけるワイルドカード文字のエスケープ  | name LIKE '50%%' ESCAPE ''            |
| IN (...)            | 候補リストとの一致                | status IN ('draft','active')          |
| NOT IN (...)        | 候補リストに含まれない              | type NOT IN ('cancelled', 'archived') |
| BETWEEN ... AND     | 範囲比較（含む）                 | age BETWEEN 20 AND 30                 |
| NOT BETWEEN ... AND | 範囲外の比較                   | price NOT BETWEEN 100 AND 200         |
| IS NULL             | NULL判定                   | email IS NULL                         |
| IS NOT NULL         | NULLでないかの判定              | email IS NOT NULL                     |

## 条件式（制御構文）

| 式                                    | 用途                      | 使用例                                            |
| ------------------------------------ | ----------------------- | ---------------------------------------------- |
| CASE WHEN THEN                       | 条件分岐（if-else相当）         | CASE WHEN gender = 'M' THEN '男性' ELSE '女性' END |
| COALESCE(...)                        | NULLを順番に回避（最初の非NULLを返す） | COALESCE(nickname, username, '名無し')            |
| NULLIF(a, b)                         | 値が等しければNULLを返す          | NULLIF(score, 0)                               |
| IF(condition, true\_val, false\_val) | 条件式（MySQL限定）            | IF(score >= 60, '合格', '不合格')                   |



# 関数一覧（Functions）

## 1. 集約関数（Aggregate Functions）

| 関数                  | 概要              |
| ------------------- | --------------- |
| COUNT(expr)         | 行数カウント（NULL除外）  |
| COUNT(\*)           | 全行カウント（NULL含む）  |
| SUM(expr)           | 合計              |
| AVG(expr)           | 平均              |
| MIN(expr)           | 最小値             |
| MAX(expr)           | 最大値             |
| GROUP\_CONCAT(expr) | カンマ区切り連結（MySQL） |


## 2. 文字列関数（String Functions）

| 関数                           | 概要                |
| ---------------------------- | ----------------- |
| LENGTH(str)                  | バイト数（MySQL）または文字数 |
| CHAR\_LENGTH(str)            | 文字数               |
| LOWER(str)                   | 小文字変換             |
| UPPER(str)                   | 大文字変換             |
| TRIM(str)                    | 前後の空白除去           |
| LTRIM/RTRIM(str)             | 左側/右側の空白除去        |
| CONCAT(s1, s2, ...)          | 文字列結合             |
| SUBSTRING(str, s, l)         | 部分文字列抽出           |
| REPLACE(str, a, b)           | 置換                |
| REPEAT(str, n)               | 繰り返し              |
| REVERSE(str)                 | 反転                |
| LEFT(str, n) / RIGHT(str, n) | 左/右からn文字取得        |



## 3. 数値関数（Numeric Functions）

| 関数                   | 概要         |
| -------------------- | ---------- |
| ROUND(n, d)          | 四捨五入       |
| CEIL(n) / CEILING(n) | 切り上げ       |
| FLOOR(n)             | 切り捨て       |
| ABS(n)               | 絶対値        |
| MOD(n, m)            | 剰余（n % m）  |
| POWER(x, y)          | xのy乗       |
| SQRT(n)              | 平方根        |
| RAND()               | ランダム値（0〜1） |
| TRUNCATE(n, d)       | 小数点以下切り捨て  |


## 4. 日付・時刻関数（Date/Time Functions）

| 関数                                       | 概要            |
| ---------------------------------------- | ------------- |
| NOW() / CURRENT\_TIMESTAMP               | 現在の日時         |
| CURDATE() / CURRENT\_DATE                | 現在の日付         |
| CURTIME() / CURRENT\_TIME                | 現在の時刻         |
| DATE(expr)                               | 日付部分を抽出       |
| TIME(expr)                               | 時刻部分を抽出       |
| YEAR(expr) / MONTH(expr) / DAY(expr)     | 各成分抽出         |
| HOUR(expr) / MINUTE(expr) / SECOND(expr) | 各成分抽出         |
| DATEDIFF(d1, d2)                         | 日数差（MySQL）    |
| TIMESTAMPDIFF(unit, d1, d2)              | 単位付き差分（MySQL） |
| DATE\_ADD(date, INTERVAL x unit)         | 日付加算（MySQL）   |
| DATE\_SUB(date, INTERVAL x unit)         | 日付減算（MySQL）   |
| STRFTIME(fmt, date)                      | 書式化（SQLite）   |


## 5. 論理・条件関数（Conditional & Logical）

| 関数                  | 概要                       |
| ------------------- | ------------------------ |
| CASE WHEN THEN      | 条件分岐                     |
| NULLIF(a, b)        | 等しければNULL                |
| COALESCE(a, b, ...) | 最初の非NULL値                |
| IF(cond, t, f)      | 三項条件（MySQLのみ）            |
| IIF(cond, t, f)     | 三項条件（SQL Server, SQLite） |

## 6. NULL処理関数

| 関数              | 概要                     |
| --------------- | ---------------------- |
| ISNULL(expr)    | NULLならtrue（SQL Server） |
| IFNULL(expr, v) | NULLならv（MySQL/SQLite）  |
| COALESCE(...)   | 最初の非NULL値を返す           |
| NULLIF(a, b)    | a = b なら NULL、それ以外は a  |



## 7. JSON関数（MySQL/PostgreSQL/SQLite限定）

| 関数                        | 概要                   |
| ------------------------- | -------------------- |
| JSON\_EXTRACT(json, path) | JSONから値取得（MySQL）     |
| -> / ->>                  | JSONアクセス（PostgreSQL） |
| JSON\_OBJECT(...)         | JSONオブジェクト生成         |
| JSON\_ARRAY(...)          | JSON配列生成             |
| JSON\_VALID(json)         | 正しいJSONかチェック         |



## 8. ウィンドウ関数（Window Functions）

| 関数                     | 概要    |
| ---------------------- | ----- |
| ROW\_NUMBER()          | 行番号   |
| RANK() / DENSE\_RANK() | 順位    |
| NTILE(n)               | n分割   |
| LAG(expr)              | 1つ前の値 |
| LEAD(expr)             | 1つ後の値 |
| FIRST\_VALUE(expr)     | 最初の値  |
| LAST\_VALUE(expr)      | 最後の値  |


# 日時書式一覧（Date/Time Format）

以下は、SQLで使用される「日時書式（フォーマット）」の一覧です。<br>日付や時刻を表示・抽出・変換する際に使われます。<br>
#### 用途
* フォーマット文字列（表示・出力形式を指定）
* 抽出（年・月・日などを切り出し）
* 変換（文字列⇔日時の変換）

| 書式 | 意味                  | 例（2025年5月9日 15:42:07） |
| -- | ------------------- | --------------------- |
| %Y | 西暦4桁                | 2025                  |
| %y | 西暦下2桁               | 25                    |
| %m | 月（2桁）               | 05                    |
| %c | 月（1〜12）             | 5                     |
| %d | 日（2桁）               | 09                    |
| %e | 日（1〜31）             | 9                     |
| %H | 時（24時間制, 00〜23）     | 15                    |
| %k | 時（24時間制, 空白埋め）      | 15                    |
| %I | 時（12時間制, 01〜12）     | 03                    |
| %l | 時（12時間制, 空白埋め）      | 3                     |
| %p | 午前/午後（AM/PM）        | PM                    |
| %M | 分（00〜59）            | 42                    |
| %S | 秒（00〜59）            | 07                    |
| %f | マイクロ秒（6桁）           | 123456                |
| %z | タイムゾーンオフセット（±HHMM）  | +0900                 |
| %Z | タイムゾーン名（DB依存）       | JST                   |
| %a | 曜日（略称）              | Fri                   |
| %W | 曜日（英語フル）            | Friday                |
| %w | 曜日番号（0:日〜6:土）       | 5                     |
| %j | 年内通算日数（001〜366）     | 129                   |
| %U | 年内の週番号（00〜53、日曜始まり） | 19                    |
| %V | ISO週番号（01〜53）       | 19                    |
| %x | ローカルな日付表現（MySQL依存）  | 05/09/25              |
| %r | 時刻（12時間制、AM/PM）     | 03:42:07 PM           |
| %T | 時刻（24時間制）           | 15:42:07              |
| %D | 日付（MM/DD/YY形式）      | 05/09/25              |




# 日時文字列書式 一覧（Date/Time Format Literals）

| 書式                        | 備考（用途・例）                                   |
| ------------------------- | ------------------------------------------ |
| YYYY-MM-DD                | 日付のみ（例：2025-05-09）                         |
| YYYY-MM-DD HH\:MM         | 日付と時刻（分まで）（例：2025-05-09 14:30）             |
| YYYY-MM-DD HH\:MM\:SS     | 日付と時刻（秒まで）（例：2025-05-09 14:30:45）          |
| YYYY-MM-DD HH\:MM\:SS.SSS | 日付と時刻（ミリ秒まで）（例：2025-05-09 14:30:45.123）    |
| HH\:MM                    | 時刻のみ（分まで）（例：14:30）                         |
| HH\:MM\:SS                | 時刻のみ（秒まで）（例：14:30:45）                      |
| HH\:MM\:SS.SSS            | 時刻のみ（ミリ秒まで）（例：14:30:45.123）                |
| now                       | 現在時刻（SQLiteやPostgreSQLなどで使用可能）             |
| UNIX時間（整数または文字列）          | 1970年1月1日 00:00:00 UTC からの秒数（例：1725859200） |

#### ※補足：

* `YYYY`：年、`MM`：月、`DD`：日
* `HH`：時（24時間制）、`MM`：分、`SS`：秒、`SSS`：ミリ秒
* 書式はデータベースごとに解釈が異なる場合があります（特にUNIX時間の扱いなど）

---

# 日時修飾子一覧（Date/Time Modifiers）

| 修飾子（書式）          | 意味・用途                                   | 使用例                                   |
| ---------------- | --------------------------------------- | ------------------------------------- |
| NNN days         | NNN日加算／減算                               | +7 days → 7日後／-30 days → 30日前         |
| NNN hours        | NNN時間加算／減算                              | +3 hours → 3時間後                       |
| NNN minutes      | NNN分加算／減算                               | -90 minutes → 90分前                    |
| NNN.NNNN seconds | NNN秒加算／減算（小数対応）                         | +0.5 seconds → 0.5秒後                  |
| NNN months       | NNNか月加算／減算                              | -1 months → 1か月前                      |
| NNN years        | NNN年加算／減算                               | +1 years → 翌年                         |
| start of day     | 日の始まり（00:00:00）に設定                      | '2025-05-09 15:23:12', 'start of day' |
| start of month   | 月の初日（1日00:00:00）に設定                     | 'start of month'                      |
| start of year    | 年初（1月1日 00:00:00）に設定                    | 'start of year'                       |
| weekday N        | 本日以降の N 曜日（0=日曜, 6=土曜）                  | 'weekday 0' → 次の日曜                    |
| unixepoch        | UNIX時間（1970-01-01 00:00:00 UTCからの秒数）へ変換 | datetime(1725859200, 'unixepoch')     |
| localtime        | UTCからローカル時刻に変換                          | 'now', 'localtime'                    |
| utc              | ローカルからUTC時刻に変換                          | 'now', 'utc'                          |



#### 特徴と補足：


* 複数の修飾子を空白区切りで組み合わせることができます（例: now, '+1 day', 'start of month'）。
* 加算・減算は「+」「-」を先頭に付けます。
* weekday は曜日指定で、今週中に来る該当曜日または来週を返します。


---






# 基本操作
| 命令               | 意味             |
| ---------------- | -------------- |
| mysql            | MySQL クライアント起動 |
| -u               | ユーザー名指定        |
| -p               | パスワード指定（プロンプト） |
| -h               | ホスト指定          |
| -P               | ポート番号指定        |
| \q / quit / exit | ログアウト          |
| help / \h        | ヘルプ表示          |

## ローカル MySQL サーバーに接続
```sh
$ mysql -u [ユーザー名] -p
```

## ローカル MySQL サーバーに接続（パスワードをワンラインで指定）
※ セキュリティ上、履歴に残るため推奨されません。
```sh
$ mysql -u [ユーザー名] -p[パスワード]
```

## 外部 MySQL サーバーに接続
```sh
$ mysql -u [ユーザー名] -p -h [ホスト名] -P [ポート番号]
```

### 補足
- `-p` オプションはパスワードが設定されている場合のみ必要。
- MySQL にログイン後は `mysql>` プロンプトが表示され、MySQL コマンドのみ使用可能。
- コマンドの末尾には `;` (セミコロン) を付ける。

## ログアウト
```sh
mysql> \q
mysql> quit
mysql> exit
```

## ヘルプ
```sh
mysql> help
mysql> \h
```

---

# ユーザー操作（root ログイン後）
| 命令                         | 意味         |
| -------------------------- | ---------- |
| SELECT ... FROM mysql.user | ユーザー情報を取得  |
| CREATE USER                | ユーザー作成     |
| DROP USER                  | ユーザー削除     |
| GRANT                      | 権限付与       |
| REVOKE                     | 権限剥奪       |
| SHOW GRANTS                | 権限一覧表示     |
| SET PASSWORD               | パスワード設定・変更 |

## ユーザー情報の取得
```sql
mysql> SELECT Host, User, Password FROM mysql.user;
```

## ユーザーの作成
ユーザー `testuser`（パスワード `password`）を作成
```sql
mysql> CREATE USER `testuser`@`localhost` IDENTIFIED BY 'password';
```

## ユーザーの削除
```sql
mysql> DROP USER 'testuser'@'localhost';
```

## ユーザーにDB操作権限を付与
`testuser@localhost` に `test_db` への全権限を付与
```sql
mysql> GRANT ALL PRIVILEGES ON test_db.* TO `testuser`@`localhost` IDENTIFIED BY 'password';
```

## 権限の確認
```sql
mysql> SHOW GRANTS FOR 'testuser'@'localhost';
```

## ユーザーの権限を取り消す
```sql
mysql> REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'testuser'@'localhost';
```

## 現在ログイン中のユーザーのパスワード変更
```sql
mysql> SET PASSWORD = PASSWORD('newpassword');
```

## 特定のユーザーのパスワード変更
```sql
mysql> SET PASSWORD FOR 'testuser'@'localhost' = PASSWORD('newpassword');
```

---

# データベース操作
| 命令              | 意味            |
| --------------- | ------------- |
| SHOW DATABASES  | データベース一覧を表示   |
| CREATE DATABASE | データベースを作成     |
| DROP DATABASE   | データベースを削除     |
| USE             | 使用するデータベースを選択 |
| mysqldump       | データベースをバックアップ |
| mysql <         | バックアップをリストア   |

## データベース一覧の表示
```sql
mysql> SHOW DATABASES;
```

## データベースの作成
```sql
mysql> CREATE DATABASE test_db;
```

## データベースの削除
```sql
mysql> DROP DATABASE test_db;
```

## データベースの選択
```sql
mysql> USE test_db;
```

## データベースのバックアップ
```sql
$ mysqldump -u [ユーザー名] -p test_db > backup.sql
```

## データベースのリストア
```sql
$ mysql -u [ユーザー名] -p test_db < backup.sql
```


---

# テーブル操作
| 命令                                      | 意味            |
| --------------------------------------- | ------------- |
| SHOW TABLES                             | テーブル一覧を表示     |
| SHOW TABLE STATUS                       | テーブルの詳細情報を表示  |
| SELECT FROM information\_schema.columns | 全テーブルからカラムを検索 |
| CREATE TABLE                            | テーブルを作成       |
| DROP TABLE                              | テーブルを削除       |
| TRUNCATE TABLE                          | 全データ削除（構造は保持） |
| ALTER TABLE ... RENAME                  | テーブル名を変更      |
| ALTER TABLE ... ADD                     | カラムを追加        |
| ALTER TABLE ... DROP COLUMN             | カラムを削除        |
| ALTER TABLE ... MODIFY                  | カラムのデータ型を変更   |
| DESC                                    | テーブルの構造を表示    |
| SHOW FULL COLUMNS                       | カラムの詳細情報を表示   |

## テーブル一覧の表示
```sql
mysql> SHOW TABLES;
```

## テーブルの詳細情報取得
```sql
mysql> SHOW TABLE STATUS;
```

## 全テーブルから特定のフィールド検索
```sql
mysql> SELECT table_name, column_name FROM information_schema.columns WHERE column_name = '検索条件';
```

## テーブルの作成
```sql
mysql> CREATE TABLE `m_users` (
          `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'ID',
          `user_name` VARCHAR(100) NOT NULL COMMENT 'ユーザー名',
          `mail_address` VARCHAR(200) NOT NULL COMMENT 'メールアドレス',
          `password` VARCHAR(100) NOT NULL COMMENT 'パスワード',
          `created` DATETIME DEFAULT NULL COMMENT '登録日',
          `modified` DATETIME DEFAULT NULL COMMENT '更新日'
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

## テーブルの削除
```sql
mysql> DROP TABLE IF EXISTS [テーブル名];
```

## テーブルのデータをクリア（構造は保持）
```sql
mysql> TRUNCATE TABLE users;
```

## テーブル名の変更
```sql
mysql> ALTER TABLE [旧テーブル名] RENAME [新テーブル名];
```

## テーブルにカラムの追加
```sql
mysql> ALTER TABLE users ADD tel INT DEFAULT NULL COMMENT '電話番号' AFTER mail_address;
```

## カラムの削除
```sql
mysql> ALTER TABLE users DROP COLUMN tel;
```

## カラムのデータ型変更
```sql
mysql> ALTER TABLE users MODIFY COLUMN tel VARCHAR(20);
```

## テーブル設計の確認
```sql
mysql> DESC [テーブル名];
```

## テーブルの詳細情報取得
```sql
mysql> SHOW FULL COLUMNS FROM [テーブル名];
```

---

# レコード操作
| 命令          | 意味     |
| ----------- | ------ |
| INSERT INTO | データを追加 |
| UPDATE      | データを更新 |
| DELETE FROM | データを削除 |
| SELECT      | データを取得 |


## データの追加
```sql
mysql> INSERT INTO m_users (user_name, mail_address, password, created, modified)
          VALUES ('Demo Sui', 'Sui@hoge.com', '123456', NOW(), NOW());
```

## データの更新
```sql
mysql> UPDATE m_users SET user_name='Demo Sui', mail_address='Sui@hoge.com' WHERE id = 5;
```

## 全レコードの削除
```sql
mysql> DELETE FROM [テーブル名];
```

## 一部レコードの削除
```sql
mysql> DELETE FROM [テーブル名] WHERE [条件式];
```

---



