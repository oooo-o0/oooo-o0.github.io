---
title: 【コマンド】Dockerチートシート【一覧】
published: 2025-03-03
description: 'Dockerのコマンド一覧'
image: ''
tags: [Docker]
category: 'コマンド'
draft: false 
lang: 'ja'
---


## 基本コマンド
```sh
docker [OPTIONS] COMMAND
```

## コンテナ作成
```sh
docker run image       # コンテナを作成して起動
docker create image    # コンテナを作成（停止状態で）
```

## コンテナの管理

### コンテナ一覧
```sh
docker container ls          # コンテナの一覧を表示
docker container stats       # コンテナのリソース使用状況一覧を表示
```

### コンテナ操作 (基本操作)
```sh
docker container rm container      # コンテナを削除
docker container start container   # コンテナを開始
docker container stop container    # コンテナを停止
docker container kill container    # コンテナを強制停止
docker container restart container # コンテナを再起動
docker container pause container   # コンテナ上のプロセスを一時停止
docker container unpause container # コンテナ上のプロセスを再開
```

### コンテナ操作 (詳細操作)
```sh
docker container exec container    # コンテナ内でコマンドを実行
docker container attach container  # コンテナに標準入出力をアタッチ
```

### コンテナ操作 (ファイル・設定管理)
```sh
docker container cp srcfile dstfile              # コンテナ間でファイルをコピー
docker container rename container newname        # コンテナ名を変更
docker container update container                # コンテナの設定を変更
```

### コンテナ詳細情報
```sh
docker container logs container   # コンテナのログを表示
docker container port container   # コンテナのポートマッピングを表示
docker container top container    # コンテナ内のプロセス一覧を表示
```

## Docker レジストリ関連

### イメージの管理
```sh
docker pull name         # イメージをダウンロード
docker push name         # イメージをアップロード
docker search term       # Dockerレジストリでイメージを検索
docker login             # Dockerレジストリにログイン
docker logout            # Dockerレジストリからログアウト
```

### イメージ操作
```sh
docker image ls          # イメージの一覧を表示
docker image rm images   # イメージを削除
docker image history image # イメージのヒストリを表示
docker container commit container # コンテナからイメージを作成
docker image tag image NEWimage # イメージにタグを付ける
docker build -t name .    # Dockerfileを使ってイメージをビルド
docker image sign         # イメージに署名を付ける
```

## ボリューム管理
```sh
docker volume ls # ボリュームを表示
docker volume rm volume_name # ボリュームを削除
```

## ネットワーク管理
```sh
docker network ls # ネットワークを表示
docker network create my_network # 新しいネットワークを作成
docker network rm my_network # ネットワークを削除
```

## インポート／エクスポート／セーブ／ロード

### コンテナのエクスポート・インポート
```sh
docker container export container_name > archive.tar # コンテナをエクスポート
docker import archive.tar # エクスポートしたファイルをインポート
```

### イメージの保存・ロード
```sh
docker image save image > image.tar # イメージをファイルに保存
docker image load < image.tar # セーブしたイメージをロード
```

## Docker Swarm (クラスタリング) 関連

### Swarm クラスタ管理
```sh
docker swarm init            # Swarmクラスタを初期化
docker node ls               # Swarmノードの一覧を表示
docker stack deploy -c docker-compose.yml my_stack # Swarmスタックをデプロイ
docker secret create secret_name file_name # シークレットを作成
docker service ls            # Swarmサービスの一覧を表示
```

## その他のコマンド

### Docker バージョン・情報表示
```sh
docker --version      # バージョンを表示
docker help          # ヘルプを表示
docker info          # システム情報を表示
docker inspect       # オブジェクトの詳細情報を表示
docker diff container # コンテナ内の変更ファイルを表示
docker wait container # コンテナの停止を待機
docker events         # Dockerエンジンのイベントを表示
```

### オプション(OPTIONS)
```sh
--config string        # 設定ファイルの場所
--context string       # Dockerコンテキストを指定
-D, --debug            # デバッグモードを有効にする
-H, --host list        # ホストリストを指定
-l, --log-level string # ログレベルを指定
-v, --version          # バージョン情報を表示
--tls                  # TLSを有効にする
--tlscacert string     # CA証明書を指定
--tlscert string       # サーバ証明書を指定
--tlskey string        # サーバ鍵を指定
--tlsverify            # TLS検証を有効にする
```

## Docker Compose コマンド

### 稼働中のコンテナに入る
```sh
docker-compose exec app_name bash   # コンテナにbashシェルで入る
```

### コンテナ操作
```sh
docker-compose stop       # コンテナを停止
docker-compose rm -v      # コンテナとボリュームを削除
docker-compose build --no-cache # キャッシュなしでビルド
```

### コンテナ一括削除
```sh
docker container rm $(docker container ls -a -q) # すべてのコンテナを削除
```

### ボリューム一括削除
```sh
docker volume rm $(docker volume ls -qf dangling=true) # 未使用のボリュームを削除
```

### イメージ管理
```sh
docker image ls -a    # イメージ一覧を表示
docker image rm $(docker image ls -aq)   # すべてのイメージを削除
docker image rm -f $(docker image ls -aq) # 強制的に削除
```

### 未使用イメージ削除
```sh
docker image prune     # <none> イメージを削除
docker image rm $(docker image ls | awk '/^<none>/ { print $3 }') # 古いバージョンの削除
```

### ファイルコピー
```sh
docker cp host_file container_name:/path/in/container   # ホスト→コンテナ
docker cp container_name:/path/in/container host_path    # コンテナ→ホスト
```