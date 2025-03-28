---
title: 【コマンド】 MySQLチートシート【基本操作】
published: 2025-03-09
description: ' MySQLの基本操作コマンドと構文一覧'
image: ''
tags: [MySQL]
category: 'テンプレート'
draft: false 
lang: ''
---

# 基本操作

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



