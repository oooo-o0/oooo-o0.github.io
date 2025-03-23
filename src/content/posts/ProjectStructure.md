---
title: 【設計】Java Webシステム【構成】
published: 2025-03-12
description: 'Java Webアプリケーションのプロジェクト構成ガイド'
tags: [Java, React, TailwindCSS ]
category: '命名規則'
draft: false 
lang: 'ja'
---

# 1. サーブレット & JSP のプロジェクト構成

```
com.example.project/
├── src/
│   ├── main/
│   │   ├── java/com/example/project/
│   │   │   ├── config/         # 設定クラス（例：DB接続設定、アプリ設定）
│   │   │   ├── controller/     # サーブレットクラス（ユーザーリクエストを処理）
│   │   │   ├── service/        # ビジネスロジックを担当するクラス
│   │   │   ├── dao/           # データアクセスオブジェクト（DBとのやり取り）
│   │   │   ├── entity/        # データベースのテーブルに対応するモデルクラス
│   │   │   ├── dto/           # クライアントとのデータ転送用オブジェクト
│   │   │   ├── util/         # ユーティリティクラス（例：日付変換、共通処理）
│   │   │   ├── exception/     # 例外処理関連のクラス
│   │   │   ├── filter/       # フィルター処理（認証、リクエストの前処理）
│   │   │   ├── listener/     # イベントリスナークラス（アプリ起動時の処理など）
│   │   │   ├── validator/    # 入力バリデーション処理クラス
│   │   │   ├── security/     # 認証・認可関連の処理（例：セッション管理）
│   │   │   ├── scheduler/    # 定期実行するジョブ処理
│   │   │   ├── runner/       # アプリ起動時に実行するクラス
│   │   │   ├── constants/    # 定数クラス（アプリ内で使用する固定値を管理）
│   │   ├── resources/
│   │   │   ├── WEB-INF/
│   │   │   │   ├── views/         # JSPファイルを格納（例：WEB-INF/views/home.jsp）
│   │   │   │   ├── lib/           # 追加のライブラリ（JARファイル）
│   │   │   ├── static/
│   │   │   │   ├── css/           # CSSファイル
│   │   │   │   ├── js/            # JavaScriptファイル
│   │   │   │   ├── images/        # 画像ファイル
│   ├── test/                      # テストコード
│   ├── web.xml                     # Webアプリケーションの設定ファイル
├── pom.xml                         # Mavenのビルド設定（Gradleなら build.gradle）
```

# 2. Spring Boot + Thymeleaf のプロジェクト構成

```
spring-mybatis-app/
├── src/
│   ├── main/
│   │   ├── java/com/example/app/
│   │   │   ├── Application.java  # Spring Bootアプリのエントリーポイント
│   │   │   ├── config/            # 設定クラス（DB設定、MyBatis設定など）
│   │   │   ├── controller/        # コントローラー（Thymeleafとの連携もここ）
│   │   │   ├── service/           # サービス（ビジネスロジック）
│   │   │   ├── repository/        # MyBatisのMapperインターフェース
│   │   │   ├── entity/            # エンティティクラス
│   │   │   ├── dto/               # DTO（データ転送オブジェクト）
│   │   │   ├── model/             # ビジネスロジック関連クラス
│   │   │   ├── util/              # ユーティリティクラス
│   │   │   ├── exception/         # 例外処理クラス
│   │   │   ├── security/          # 認証・認可関連クラス
│   │   │   ├── scheduler/         # スケジューリング関連クラス
│   │   │   ├── runner/            # アプリ起動時の処理クラス
│   │   │   ├── mapper/            # MyBatisのXMLマッピングをサポートするクラス
│   │   │   ├── listener/          # イベントリスナークラス
│   │   │   ├── validator/         # 入力データのバリデーション
│   │   │   ├── view/              # HTMLテンプレートを操作するクラス
│   │   │   ├── converter/         # データ変換クラス
│   │   ├── resources/
│   │   │   ├── static/
│   │   │   │   ├── css/           # CSSファイル
│   │   │   │   ├── js/            # JavaScriptファイル
│   │   │   │   ├── images/        # 画像ファイル
│   │   │   ├── templates/         # Thymeleafのテンプレートファイル（.html）
│   │   │   ├── application.yml    # Spring Bootの設定ファイル
│   │   │   ├── mybatis/           # MyBatisのSQLマッピングファイル（.xml）
│   ├── test/                      # テストコード
├── pom.xml                         # Mavenのビルド設定
```


# 3. Spring Boot + React + Tailwind CSS プロジェクト構成

```
spring-react-app/
├── backend/  # Spring Boot（バックエンド）
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/app/
│   │   │   │   ├── Application.java       # Spring Bootのエントリーポイント
│   │   │   │   ├── config/                # 設定クラス（DB, CORS, JWTなど）
│   │   │   │   ├── controller/            # REST APIのエンドポイント
│   │   │   │   ├── service/               # ビジネスロジック層
│   │   │   │   ├── repository/            # データアクセス層（JPA, MyBatisなど）
│   │   │   │   ├── entity/                # データベースのエンティティ
│   │   │   │   ├── dto/                   # データ転送オブジェクト
│   │   │   │   ├── model/                 # ビジネスロジック関連クラス
│   │   │   │   ├── util/                  # ユーティリティクラス
│   │   │   │   ├── exception/             # 例外処理クラス
│   │   │   │   ├── security/              # 認証・認可関連クラス（JWT, OAuth2など）
│   │   │   │   ├── scheduler/             # 定期処理（バッチ）
│   │   │   │   ├── runner/                # アプリ起動時の処理
│   │   │   │   ├── mapper/                # DTOとエンティティのマッピング
│   │   │   │   ├── listener/              # イベントリスナー
│   │   │   │   ├── validator/             # 入力バリデーション
│   │   │   │   ├── converter/             # データ変換クラス
│   │   ├── resources/
│   │   │   ├── application.yml            # Spring Boot設定（DB, CORS, JWTなど）
│   │   │   ├── static/                    # 静的ファイル（画像, フォントなど）
│   │   │   ├── templates/                 # Thymeleaf用テンプレート（必要なら）
│   ├── src/test/java/com/example/app/     # テストコード
│   ├── pom.xml                             # Mavenのビルド設定
│   ├── Dockerfile                          # Dockerコンテナ設定（必要なら）
│   ├── README.md                           # 説明書

├── frontend/  # React + Tailwind CSS（フロントエンド）
│   ├── src/
│   │   ├── assets/                         # 画像, フォント, アイコンなどの静的ファイル
│   │   ├── components/                     # 再利用可能なUIコンポーネント
│   │   ├── pages/                          # 画面ごとのコンポーネント
│   │   ├── hooks/                          # カスタムフック
│   │   ├── context/                        # React Context API（状態管理）
│   │   ├── store/                          # Redux / Zustand などの状態管理
│   │   ├── services/                       # API通信（Axios, fetch など）
│   │   ├── utils/                          # 共通のユーティリティ関数
│   │   ├── styles/                         # Tailwindのカスタム設定やグローバルCSS
│   │   ├── types/                          # TypeScript の型定義（TSの場合）
│   │   ├── App.js                          # ルートコンポーネント
│   │   ├── main.js                         # Reactエントリーポイント
│   ├── public/
│   │   ├── index.html                      # HTMLのエントリーポイント
│   │   ├── favicon.ico                     # Favicon
│   │   ├── robots.txt                      # SEO向け設定
│   ├── .env                                # 環境変数（APIのエンドポイントなど）
│   ├── tailwind.config.js                  # Tailwind CSSの設定
│   ├── postcss.config.js                   # PostCSS設定（Tailwindのビルド用）
│   ├── package.json                        # フロントエンドの依存関係
│   ├── vite.config.js                      # Viteの設定（Reactのビルド用）
│   ├── tsconfig.json                       # TypeScript設定（TSの場合）
│   ├── README.md                           # 説明書
│   ├── Dockerfile                          # フロントエンド用Docker設定（必要なら）

├── .gitignore         # Git無視ファイルリスト
├── docker-compose.yml # Docker環境（MySQL, Spring Boot, Reactの連携）
├── README.md          # 全体の説明
```
