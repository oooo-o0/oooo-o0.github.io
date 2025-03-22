---
title: 【完全無料】Astro + GitHub Pages でブログ構築【デプロイ手順】
published: 2025-03-13
description: 'Astro を使用して GitHub Pages にブログを構築する方法を紹介'
image: ''
tags: [Astro, GitHub Pages, GitHub Actions]
category: '個人開発'
draft: false 
lang: 'ja'
---
---
# 1. GitHub リポジトリの作成  
1. GitHubで **新しいリポジトリ** を作成  
2. 必要な情報を入力し、「Public（公開）」を選択  
3. 「Create repository」をクリック  

## リポジトリをローカルにクローン  
```sh
git clone git@github.com:YOURNAME/astro.git
cd astro
```

---

# 2. Node.js & npm インストール

## **1. nvm（Node.js バージョン管理ツール）をインストール**
```sh
# nvm がインストールされているか確認
command -v nvm

# nvm をインストール（未インストールの場合）
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash

# シェルの設定ファイルを再読み込み（bash または zsh）
source ~/.bashrc  # or source ~/.zshrc
```

## **2. Node.js（LTS版）をインストール & 使用**
```sh
# 最新の LTS（推奨版）をインストール
nvm install --lts

# LTSバージョンを使用
nvm use --lts

# プロジェクトで特定のバージョンを固定（オプション）
echo "lts/*" > .nvmrc
```

## **3. npm 最新バージョンのインストール**
```sh
npm install -g npm@latest
```

## **4. インストール確認**
```sh
node -v  # Node.js のバージョン確認
npm -v   # npm のバージョン確認
``` 



---

# 3. Astro プロジェクトの作成  
```sh
npm create astro@latest project -- --template minimal --no-install --no-git
mv project/{*,.*} . && rm -r project
npm install　#依存関係のインストール
```

---

# 4. `.gitignore` の編集  
デフォルトの `dist/` を `/dist/` に変更。  
```diff
-dist/
+/dist/
```

---

# 5. `astro.config.mjs` の編集  
GitHub Pages用の `site` を設定。  
```js
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

export default defineConfig({
  integrations: [preact()],
  buildOptions: {
    site: "https://<GitHubのユーザー名>.github.io/"
  },
});
```

---

# 6. GitHub Actions の設定  
`/.github/workflows/deploy.yml` を作成し、以下のYAMLを追加。  

```yaml
name: Deploy to GitHub Pages

on:
  # `main`ブランチにプッシュするたびにワークフローを実行します。
  # 異なるブランチ名を使用する場合は、`main`をブランチ名に置き換えてください。
  push:
    branches: [ main ]
  # このワークフローをGitHubのActionsタブから手動で実行できるようにします。
  workflow_dispatch:

# このジョブがリポジトリをクローンし、ページデプロイメントを作成することを許可します。
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v4
      - name: Install, build, and upload your site
        uses: withastro/action@v3
        # with:
          # path: . # リポジトリ内のAstroプロジェクトのルートロケーション。（オプション）
          # node-version: 20 # サイト構築に使用するNodeのバージョン。デフォルトは20です。（オプション）
          # package-manager: pnpm@latest # 依存関係のインストールとサイトのビルドに使用するNodeパッケージマネージャ。ロックファイルに基づいて自動的に検出されます。（オプション）

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

# 7. GitHub Pages の設定  
1. GitHub の **リポジトリ → Settings → Pages** に移動  
2. 「Source」を **GitHub Actions** に設定  

---

# 8. デプロイ確認  
1. `deploy.yml` をコミット＆プッシュ  
2. GitHubの **Actions** で `build → deploy` が正常に完了することを確認  
3. `https://<GitHubのユーザー名>.github.io/` にアクセスし、サイトが表示されたらデプロイ完了

---
