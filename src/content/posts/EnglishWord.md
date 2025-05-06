---
title: 【設計】英語命名規則【一覧】  
published: 2025-04-14  
description: '変数/関数/メソッドの命名規則'  
image: ''  
tags: [オブジェクト（クラス）, 関数（メソッド）]  
category: '命名規則'  
draft: false  
lang: 'ja'
---

# 命名フローチャート

- **変数、定数、テーブル、カラム**
  - 日時を示す？
    - **YES** → `動詞 + at/on`
    - **NO**
      - 代入する値は boolean？
        - **NO** → `形容詞 + 名詞`
        - **YES**
          - 表示/非表示のフラグ？
            - **YES** → `show + 名詞`
            - **NO**
              - 機能ON/OFFのフラグ？
                - **YES** → `名詞 + enabled`
                - **NO**
                  - 存在するかどうかのフラグ？
                    - **YES** → `名詞 + exists`
                    - **NO**
                      - 持つ/含むかどうかのフラグ？
                        - **YES** → `has/contains + 名詞`
                        - **NO** → `is + 形容詞`

---

# クラス命名規則

- **データソースを扱う**
  - **YES**
    - **Server-Client** → `名詞 + Client`
    - **APIを叩くためのゲートウェイ** → `名詞 + Gateway`
    - **DBにデータを保存** → `Store + 名詞`
    - **キャッシュする** → `名詞 + Cache`
    - **ログの保存場所** → `名詞 + Log`
    - **履歴の保存場所** → `名詞 + History`
    - **設定データの保存場所** → `Configuration / Preference / Setting`
  - **NO**
    - **データを加工する**
      - **YES**
        - **データの絞込** → `名詞 + Filter`
        - **データを抽出** → `名詞 + Extractor`
        - **データを整形** → `名詞 + Formatter`
        - **データを集める** → `名詞 + Collector`
      - **NO**
        - **データソースをラップする**
          - **YES**
            - **DB、HTTP通信、キャッシュ等をカプセル化** → `名詞 + Provider`
            - **データ管理（モデル）** → `名詞 + Manager`
            - **データの読み込み** → `名詞 + Loader`
            - **ログを出力（またはLogクラスへのアクセスを提供）** → `Logger`
            - **設定を保存** → `名詞 + Configurator`
            - **データ構造に変更を加える（バージョンアップなど）** → `名詞 + Migrator`
          - **NO**
            - **非同期処理を扱う**
              - **YES**
                - **一連の非同期処理を行う** → `名詞 + Job / Task`
                - **与えられたJobやTaskを実行** → `名詞 + Runner`

---

## 基本形
- **形容詞 + 名詞**
- **名詞 + 名詞**

- **関数、クラス**
  - イベント関数？
    - **YES** → `on + 名詞 + 形容詞`
    - **NO**
      - 変換/整形する？
        - **YES** → `to + 名詞`
        - **NO**
          - 何かの状態を変更したい？
            - **YES** → `動詞 + 目的語 + 形容詞`
            - **NO** → `動詞 + 目的語`

---

# 関数命名規則

## 取得
- **Yes**
  - オブジェクトから値を取得: `get`
  - select(1件の場合)
  - DBなど別の場所から値を取得
    - `fetch`
    - `search` (検索を伴う・リストの取得)
    - `find` (1つもしくはそれが持つ各子要素)
  - ファイルを読み込む: `load`
  - 条件付きの取得:
    - `read` (行の読み込み)
    - `filter`
    - `extract`
- **No** → 次へ

---

## 変更
- **Yes**
  - データを変更: `to + 名詞`
  - toggle (ON/OFFを切り替える場合)
  - 情報の更新 (データベースのレコード更新など): `update`
  - 自分の持つ値を変更: `modify`
  - 新しいデータを置き換える: `change`
  - 既存の文字列を置換: `replace`
  - 元のデータに戻す: `restore`
  - 読み方を変換: `convert`
  - 有効にする: `enable`
  - 無効にする: `disable`
  - ルールに従って変換する
- **No** → 次へ

---

## 追加
- **Yes**
  - DBにデータを加える: `add`
  - 配列にデータを加える:
    - `append`
    - `prepend`
    - `insert`
  - 複数のデータを結合する: `merge`
- **No** → 次へ

---

## 作成
- **Yes**
  - ルールに基づいて新たな値を作成する: `generate`
  - 新しく作る: `create`
- **No** → 次へ

---

## 削除
- **Yes**
  - データを削除する (上記に該当しない): `delete`
  - データをアクセス不能な場所へ送り込む: `remove`
  - 中身を空にする:
    - `clear`
  - オブジェクトを完全に破棄:
    - `destroy`
    - `dispose`
- **No** → 次へ

---

## 検証
- **Yes**
  - 検証や正当性を確認する: `validate`
  - 正しく動作しているかを調べる: `verify`
  - 変数のboolean値を調べる
- **No** → 次へ

---

## 許可
- **Yes**
  - 許可する・権限を与える: `allow`
  - 申請を承認する: `accept`
  - ユーザーに権利を付与する: `grant`
- **No** → 次へ

---

## 禁止
- **Yes**
  - 申請を却下する:
    - `refuse`
    - `reject`
    - `deny`
  - 許可を取り消す: `revoke`
- **No** → 次へ

---

## 基本形
- **動詞のみ**
- **動詞 + 名詞**

# 1. 変数の命名

## boolean

### 存在するかどうかのフラグ  
```python
# 名詞 + exists
user_id_exists = True  # ユーザーIDが存在するかどうか
```

### 表示・非表示  
```python
# show + 名詞
show_purchase_histories = False  # 購入履歴を表示するかどうか
### True → 表示する  
### False → 表示しない
```



### 機能ON/OFFフラグ  
```python
# 名詞 + enabled
auto_volume_adjustment_enabled = True  # 自動音量調節機能ON/OFF
### True → 自動音量調節機能ON  
### False → 自動音量調節機能OFF
```



### 持つ/含むかどうかのフラグ  
```python
# has/contains + 名詞
has_purchased_items = True  # 購入済み商品を含むか
### True → 購入済み商品を含む  
### False → 購入済み商品を含まない
```



### 基本形  
```python
# is + 形容詞
is_empty = False  # 空かどうか
### True → 空である  
### False → 空ではない
```



---

## booleanではない

### 日時
```python
# 動詞 + at(日時)
created_at = '2025-03-22'  # 作成日時
# 動詞 + on(日付)
deleted_on = '2025-03-22'  # 削除日
```

### その他の変数  
```python
# 名詞の複数形
user_ids = [1, 2, 3]  # ユーザーIDのリスト
clicked_histories = ['history1', 'history2']  # クリック履歴のリスト
```


```python
# 形容詞 + 名詞
new_contents = ['content1', 'content2']  # 新しいコンテンツ
```

  
```python
# 動詞の受動態 
clicked_contents = ['content1', 'content2']  # クリックされたコンテンツ
# ing形 + 名詞
waiting_process = ['process1', 'process2']  # 待機中の処理
```
 
```python
# 名詞 + 名詞
item_condition = 'New'  # 商品の状態
```

```python
# 名詞 + without +
user_without_permission = True  # 許可のないユーザー
# 名詞 + before +
item_before_shipping = 'item123'  # 発送前の商品
#  名詞 + after +
item_quantity_after_shipping = 10  # 発送後の商品数
```

---



# 2. 関数の命名

## 基本形

```python
# 動詞のみ
# メッセージを作成する
def create():  
```

```python
# 動詞 + 名詞 
# 文字列を結合する  
def join_strings(first_text: str, second_text: str):  
```

## 取得
  
```python
# get: オブジェクトから値を取得
def get_name(self):  
    return self.name
```
```python
# select: 配列から値を取得

# 未読のメッセージを取得
def select_unread_messages(messages: list[Message])
```
  
```python
# fetch: 外部リソースからのデータ取得
# データベースから商品データを取得
def fetch_items():  
    pass
```

```python
# search: 条件に基づいて検索(複数検索)
# リストからアイテムを検索する
def search_items(items: list[Item], color: str, price: int):  
    pass
```

```python
# find: 特定のファイルを見つける（1つあることが期待される取得）
# ファイルやディレクトリの中から、指定した名前のファイルを探す
def find_file(path, filename):
# データベースの中から、指定した条件に合致するレコードを見つける
def find_record(database, condition):
```
```python
# load: ファイルの読み込み
# ローカルのファイルを読み込む
def l
```
```python
# read: 1行のみ読み込む
# 読み込んだファイルから1行だけ取得する
def read_line(file: File, row_number: int)
```

### 条件付きの取得  
```python
# filter: 条件を満たすアイテムをリストから抽出する
def filter_bookmarked_contents(contents: list[Content]):  
    pass
```

```python
# extract: リストの中から特定のキーに基づいた値を抽出する
def extract_values(dicts: list[dict], key: str):  
    pass
```

## 変更

  
```python
# データを変換
# to + 名詞 : オブジェクトを名詞の内容に変換する
def to_dict(self):  
    return {'user_id': self.user_id, 'name': self.name, 'age': self.age}
```


```python
# toggle: 状態を切り替える（ON/OFFなど）
def toggle_purchase_status(self):  
    self.is_purchased = not self.is_purchased
```

```python
# 情報の更新
# update: 既存のデータを更新する
def update_total_payment():  
```
```python
# 部分的な修正
# modify: 特定のデータの一部分を修正する
def modify_text(text: str, target_str: str, new_str: str):  
```

```python
# change: データを新しいものに置き換える
def change_name(self, new_name: str):  
    self.name = new_name
```

```python
# replace: 順序や文字の入れ替え
def replace_old_items(items: list[Item], new_item: Item, old_item: Item):  
    pass
```

### 元の状態に復元する
```python
# restore: 以前の状態にデータを戻す
def restore_state():  
    pass
```

```python
# correct: 誤ったデータを修正する
def correct_event_start_date(events: list[Event], correct_date: date):  
    pass
```

### 有効化する
```python
# enable: 機能を有効化する
# 自動音量調節機能をONにする
def enable_auto_volume_adjustment():  
    self.auto_volume_adjustment_enabled = True
```

### 無効化する
```python
# disable: 機能を無効化する
 # 自動音量調節機能をOFFにする
def disable_auto_volume_adjustment():  
    self.auto_volume_adjustment_enabled = False
```

### 適用する 
```python
# apply: ルールや設定の適用
# 検証ルールを適用
def apply_validation():  
    pass
```

## 追加


```python
# データをDBに追加する
# add: テーブル（データベース）に新しいレコードを追加
def add_record():   # addはデータベース以外にも、コレクションやリストなどデータ構造に追加する
# insert: テーブル（データベース）に新しいレコードを追加
def insert_record()    # データベースにデータを挿入する
```

```python
# append: 配列の末尾にデータを追加する
def append_item(items: list[Item], additional_item: Item):  
# prepend: 商品一覧の先頭にアイテムを追加する
def prepend_item(items: list[Item], additional_item: Item)
# insert: 商品一覧の任意の場所にアイテムを追加する
def insert_item(items: list[Item], additional_item: Item, index: int)
```

  
```python
# merge: 複数のデータを結合する
# 商品リストをひとまとめにする
def merge_items(kids_items: list[Item], senior_items: list[Item]):  
    pass
```

## 作成
 
```python
# generate: プログラムに従って生成
# ランダムにパスワードを作成する
def generate_password():
```

 
```python
# create: 新しく作成する
# 指定したカラムを持つ空のデータフレームを作成
def create_empty_dataframe(columns: list[str]): 
```

## 削除

 
```python
# delete: データを削除する
def delete():  
```
 
```python
# remove: アクセス可能な場所からデータを取り除く
def remove_denied_user():  
```

```python
# clear: 中身を空にする（親オブジェクト・変数自体は消えない）
def clear_bookmarks():  
```
 
```python
# オブジェクトの破棄
# destroy: セッションを完全に破棄する
def destroy_session()
# dispose: メモリを完全に開放する
def dispose_memory():  
```
### 検査
```python
# 要件や性能を満たしているかを調べる場合
# validate
# 限度額を超えていないかどうかを検査
def validate_price(item: Item, max_price: int)
```
```python
# 正しく動作しているか確かめる場合
# verify
# 認証を確認する
def verify_authentication()
```
### 許可
```python
# allow
# 許可する・権限を与える
# アクセスを許可する
def allow_access()
```
```python
# 申請を承認する
# accept
# 申請を承認する
def accept_application()
```
```python
# ユーザーに権限を持たせる
# grant
# ユーザーにテキスト編集権限を与える
def grant_user_edit_text()
```
### 禁止
```python
#形容詞 + 名詞
# 申請を退ける
# refuse
def refuse_application()    # acceptの反対として使われる。
# reject
def reject_application()    # acceptの反対として使われる。refuseよりも強い禁止。
# deny
def deny_application()    # allowの反対として使われる。
```
---

## 3. クラスの命名

### 基本形
```python
# 名詞
class User
class Content
class Item

```

### ２つの単語
```python
#形容詞 + 名詞
# 添付ファイル
class AttachedFile
# 名詞 + 名詞
# クリック履歴
class ClickHistory
```

### データソースを扱う
```python
# 名詞 + Client
# Server-Client
# BigQueryとの通信や操作を担う
class BigQueryClient  
```
```python
# 名詞 + Gateway
# APIを叩くためのゲートウェイ
# タイムラインに関連する操作を管理する
class TimelineGateway 
```
```python
#  DBにデータを保存
# 名詞 + Store
class ContentStore
# 名詞 + Storage
class ContentStrage
```
```python
# 名詞 + Cache
# キャッシュする
class ClickHistoryCache  
```
```python
# 名詞 + Log
# ログの保存場所
# APIの利用ログを保存
class APIUsageLog  
```
```python
# 名詞 + History
# 履歴の保存場所
class ClickHistory  
```
```python
# 設定データの保存場所
# 名詞 + Configuration
class RecommendationConfiguration
# 名詞 + Preference
class RecommendationPreference
# 名詞 + Setting
class RecommendationSetting  
```

### データを加工する
```python
# 名詞 + Filter
# データの絞込
class ContentFilter  
```

```python
# 名詞 + Extractor
# データを抽出
class ContentExtructor  
```
```python
# 名詞 + Formatter
# データを整形
class MessageFormatter 
```

```python
# 名詞 + Collector
# データを集める
class GAEventCollector  
```
### データソースをラップする
```python
# 名詞 + Provider
# DB、http 通信、キャッシュ等をカプセル化
class TimelineProvider
```
```python
# 名詞 + Manager
# データ管理（モデル）
class ConfigurationManager  
```
```python
# 名詞 + Loader
# データの読み込み
class BookmarkedContentLoader  
```
```python
# Logger
# API利用ログを出力する
class APIUsageLogger 
```

### 非同期処理を扱う
#### 一連の非同期処理を行う
```python
# 名詞 + Job/Task
# ファイルやデータのアップロードを行う非同期処理を管理する
class UploadJob
class UploadTask
```
#### えられたJobやTaskを実行
```python
# 名詞 + Job/Task + Runner
# ファイルやデータのアップロードを行う処理を実行する
class UploadJobRunner
class UploadTaskRunnner
```

# 略語 

```python
# 数値型
i = 0        # integer (整数) / i, j, k
n = 0        # natural number (自然数) / n, m
b = False    # boolean, byte, bit
bln = False  # boolean
byt = 0      # byte
c = 'a'      # char
ch = 'b'     # char
s = ""       # string
str = ""     # string
int = 0      # integer
sht = 0      # short
l = 0        # long
lng = 0      # long
f = 0.0      # float
flt = 0.0    # float
sng = 0.0    # single
d = 0.0      # double
dbl = 0.0    # double
dec = 0.0    # decimal
u = 0        # unsigned
uchar = ''   # unsigned char

# オブジェクト・クラス・エラー
o = object()      # object
obj = object()    # object
cls = type('')    # class
enm = enum.Enum   # enum
dte = datetime.now() # date
rng = range(10)   # range
ex = Exception()  # exception
err = Exception() # error
e = Exception()   # error
iter = iter([])   # iterator

# プロパティ・設定
prop = None       # property
attr = None       # attribute
conf = {}         # configuration
pref = {}         # preference

# 関数・手続き
def prc(): pass   # procedure, process
def proc(): pass  # procedure, process
def sub(): pass   # sub procedure
def f(): pass     # function
def fn(): pass    # function
def fnc(): pass   # function
def func(): pass  # function

# パラメータ・引数
args = ()   # arguments
params = {}  # parameters

# ステータス・統計
stat = "OK"  # status
stats = {}   # statistics

# 配列・カウント
ln = len([])   # length (配列の長さ)
len = len([])  # length
cnt = 0        # count
num = 0        # number
buf = bytearray() # buffer (一時的な文字配列)
mem = {}       # memory

# アプリケーション・ドキュメント
app = "MyApp"  # application
doc = "doc.txt" # document
ext = ".txt"   # extension
txt = "text"   # text
tmp = "/tmp/"  # temporary

# 通信・ネットワーク
conn = None    # connection
addr = "192.168.1.1" # address
dst = ""       # destination
dest = ""      # destination
src = ""       # source
cli = None     # client
svr = None     # server
cl = None      # client
sv = None      # server
srv = None     # service
svc = None     # service

# ファイル・ハンドル
h = None   # handle
fh = None  # file handle
fd = None  # file descriptor

# 数学・演算
min = 0      # minimum
max = 100    # maximum
add = lambda x, y: x + y  # add (足す), addition (加算)
sub = lambda x, y: x - y  # subtract (引く), subtraction (減算)
div = lambda x, y: x / y  # divide (割る), division (除算)
mul = lambda x, y: x * y  # multiply (掛ける), multiplication (乗算)
sum = lambda lst: sum(lst) # sum (合計する, 合計)
avg = lambda lst: sum(lst) / len(lst) if lst else 0 # average (平均)

# 量・合計
qty = 10     # quantity (個数)
tot = 100    # total (総計)
ttl = 100    # total

# 比較演算
EQ = "=="  # equal (=、等しい)
NE = "!="  # not equal (!=、<>、等しくない)
GT = ">"   # greater than (>、より大きい、超過)
GE = ">="  # greater equal (>=、以上)
LT = "<"   # less than (<、より小さい、未満)
LE = "<="  # less equal (<=、以下)

EQU = "==" # equal
NEQ = "!=" # not equal
GTR = ">"  # greater than
GEQ = ">=" # greater equal
LSS = "<"  # less than
LEQ = "<=" # less equal

# 一般的な処理
init = lambda: print("initialize") # initialize
exec = lambda: print("execute")    # execute
eval = lambda x: eval(x)           # evaluate
sync = lambda: print("synchronous") # synchronous
prev = "previous"                  # previous
curt = "current"                    # current

# 画面・UI関連
w = 800      # width
h = 600      # height
sz = (w, h)  # size
pt = (0, 0)  # point
pos = (100, 200) # position
img = None   # image
fig = None   # figure
pct = None   # picture
bg = "black" # background
fg = "white" # foreground
mid = (400, 300) # middle
nav = {}     # navigation

# リクエスト・レスポンス
rq = None   # request
req = None  # request
rsp = None  # response

# 設定・標準
std = "standard"  # standard
cfg = {}          # config
conf = {}         # config

# 時間・日付
sec = 60       # seconds
min = 60       # minutes
hrs = 24       # hours
ss = "seconds" # seconds
mm = "minutes" # minutes
hh = "hours"   # hours
dd = "days"    # days
MM = "months"  # months
yyyy = "years" # years

# 電気・物理
E = "Volt"      # Electromotive force (電圧)
I = "Ampere"    # Intensity of electric current (電流)
R = "Ohm"       # Resistance (抵抗 ohm、Ω), E=RI
f = "Hertz"     # frequency
A = "Ampere"    # Ampere (アンペア)
V = "Volt"      # Volt (ボルト)
W = "Watt"      # Watt (ワット)
T = "Celsius"   # temperature (温度)
TEMP = "Kelvin" # temperature (温度)

# データベース関連
db = "database"     # Database
conn = None         # Connection
trans = None        # Transaction
sql = "SELECT *"    # SQLStatement
qry = "query"       # Query
id = "1234"        # ID, Identifier
cd = "A123"        # Code
idx = 0            # Index
snp = "snapshot"   # Snapshot
txn = "transaction" # Transaction
```
  
# よく利用する単語
```python
# 連絡先関連
contact = {}         # 連絡先
full_name = ""       # 氏名
first_name = ""      # 名前
middle_name = ""     # ミドルネーム
last_name = ""       # 名字
honorific = ""       # 敬称
nickname = ""        # ニックネーム
job_title = ""       # 肩書
phone = ""           # 電話番号、日本では tel が一般的
cell = ""            # 携帯電話、日本では mobile が一般的
fax = ""             # ファクシミリ (facsimile)
mail = ""            # メールアドレス、e-mail とも
web = ""             # Web サイト、ホームページ、url を使っても良い
address1 = ""        # 住所 1
address2 = ""        # 住所 2 (何故かわかれていることが多い)
postal_code = ""     # 郵便番号
country = ""         # 国

# テナント関連
tenant = ""          # テナント

# ユーザー情報
user = {}            # ユーザー
loginname = ""       # ログイン名 (ログインID)
password = ""        # パスワード
display_name = ""    # ユーザー名 (表示名)
expiration_date = "" # 有効期限

# 権限・許可
permission = {}      # 許可

# 患者情報
patient = {}                     # 患者
patient_code = ""                 # 患者コード
patient_name = ""                 # 患者名
patient_name_katakana = ""        # 患者名 (カナ)
birth_date = ""                   # 生年月日、誕生日 (birthday) ではないので注意
sex_code = ""                      # 性別、ISO 5218 や DICOM規格 を参照のこと
job_role = ""                      # 職業
note = ""                          # 備考、remarks とも

# 顧客・雇用関連
customer = {}       # 顧客、取引先
employer = ""       # 雇用主
employee = ""       # 従業員

# 注文・数量
quantity = 0        # 数量
order = {}          # 注文

# タイトル関連
title = ""          # 題名
subtitle = ""       # 副題
caption = ""        # 短い説明、主に画像の説明

# 文書構造
part = ""           # 部
chapter = ""        # 章
section = ""        # 節
subsection = ""     # 項
paragraph = ""      # 段落
sentence = ""       # 文
word = ""           # 語
```

# メタ構文変数
意味のない（架空な）記述を表す識別子として使用
```python
# 変数（英語圏）
foo = "英語圏でよく使われるメタ構文変数"
bar = "foo の次によく使われる"
baz = "bar の次によく使われる"
qux = "baz の次によく使われる"
quux = "qux の次によく使われる"
corge = "quux の次によく使われる"
grault = "corge の次によく使われる"
garply = "grault の次によく使われる"
waldo = "隠れたもの（Where’s Waldo? より）"
fred = "人名由来"
plugh = "冒険ゲームの呪文由来"
xyzzy = "冒険ゲームの呪文由来"
thud = "落ちる音の擬音語"

# 変数（イギリス圏）— 上記に加えて
wibble = "イギリス圏で使われるメタ構文変数"
wobble = "wibble の次に使われる"
wubble = "wobble の次に使われる"
flob = "wubble の次に使われる"

# 変数（日本）
hoge = "日本で使われるメタ構文変数"
fuga = "hoge の次に使われる"
piyo = "fuga の次に使われる"
hogera = "hoge の派生形"
hogehoge = "hoge の繰り返し"
piyopiyo = "piyo の繰り返し"

# 変数（フランス）
toto = "フランスで使われるメタ構文変数"
tete = "toto の次に使われる"
titi = "tete の次に使われる"
tutu = "titi の次に使われる"
tata = "tutu の次に使われる"

# 変数（イタリア）
pippo = "イタリアで使われるメタ構文変数"

# 変数（ドイツ）
bla = "ドイツで使われるメタ構文変数"
blub = "bla の次に使われる"
blabla = "blub の次に使われる"

# 変数（オランダ）
aap = "オランダで使われるメタ構文変数"
noot = "aap の次に使われる"
mies = "noot の次に使われる"
wim = "mies の次に使われる"
zus = "wim の次に使われる"
jet = "zus の次に使われる"
teun = "jet の次に使われる"
vuur = "teun の次に使われる"
gijs = "vuur の次に使われる"
lam = "gijs の次に使われる"
kees = "lam の次に使われる"
bok = "kees の次に使われる"
weide = "bok の次に使われる"
does = "weide の次に使われる"
hok = "does の次に使われる"
duif = "hok の次に使われる"
schapen = "duif の次に使われる"

# 変数（Python）
spam = "Python でよく使われるメタ構文変数"
ham = "spam の次に使われる"
eggs = "ham の次に使われる"

# 人名（役割ごと）
alice_bob = "大抵は Alice が Bob にメッセージを送る"
eve = "盗聴者（Alice と Bob のメッセージを立ち聞きする）"
mallory = "邪悪な攻撃者（改ざん・攻撃を行う）"
oscar = "敵対者（Mallory と同様）"
trudy = "侵入者（Mallory の代わりに使用）"
carol_charlie = "通信における第三当事者"
dave_ellen_frank = "第四当事者"
trent = "信頼された調停者（中立の第三者）"
isaac_ivan = "発行者"
justin = "司法体系"
matilda = "商人（電子取引・金融関係で使用）"
pat_peggy = "証明者"
victor = "検証者"
plod = "法執行官吏"
steve = "電子透かしで参照される"
walter = "見張り番"
zoe = "暗号プロトコルの最後の当事者"

# 長い文章の例
lorem_ipsum = "Lorem ipsum"  # ダミーテキスト（文章レイアウトのテストに使用）

# 数字の例
num_23 = 23  # 例としてよく使われる数字
num_42 = 42  # 「人生、宇宙、すべての答え」（The Hitchhiker’s Guide to the Galaxy より）
num_deadbeef = 0xDEADBEEF  # 16進数の例（デバッグなどでよく使われる）

# ドメインの例
domain_example_com = "example.com"  # テスト用に予約されているドメイン
domain_example_net = "example.net"  # テスト用に予約されているドメイン
domain_example_org = "example.org"  # テスト用に予約されているドメイン

# 企業名・ブランド名の例
company_acme = "ACME"  # 架空の企業（ワイリー・コヨーテの漫画などで使用）

# ディレクトリへのパス名の例
path_example = "path/to/dir"  # 任意のディレクトリを示すプレースホルダー

# ディレクトリ間を移動するコマンドの例
command_cd = "cd path/to/dir"  # cd（change directory）の使用例
```

