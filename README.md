# Astro + TailwindCSS 個人Wikiブログ

## 機能一覧
- **ライト/ダークテーマ対応**
- **テーマカラー選択**
- **検索機能**
- **目次の自動生成**
- **カテゴリ別管理**
- **投稿タイムツリー表示**
- **ポートフォリオページ**

---

## **使用方法**
### **依存関係のインストール**
```sh
pnpm install && pnpm add sharp
```

※ `pnpm` がインストールされていない場合は、以下のコマンドで導入。
```sh
npm install -g pnpm
```

### **カスタマイズ**
`src/config.ts` ファイルを編集し、ブログの設定をカスタマイズ

### **新しい記事の作成**
```sh
pnpm new-post <filename>
```
作成記事は `src/content/posts/` フォルダ内で編集


---

## **記事の投稿設定**
新しい記事のヘッダー設定例:
```yaml
---
title: "New Post"
published: 2025-03-01
description: "This is a new post."
image: "/images/cover.jpg"
tags: ["post", "demo"]
category: "Front-end"
draft: false # 記事の下書き・公開を選択
---
```

---

## **コマンド一覧**

プロジェクトのルートディレクトリから実行

| Command                          | Action                                          |
| -------------------------------- | ----------------------------------------------- |
| `pnpm install && pnpm add sharp` | 依存関係のインストール                          |
| `pnpm dev`                       | `localhost:4321` で開発用ローカルサーバーを起動 |
| `pnpm build`                     | `./dist/` にビルド内容を出力                    |
| `pnpm preview`                   | デプロイ前の内容をローカルでプレビュー          |
| `pnpm new-post <filename>`       | 新しい投稿を作成                                |
| `pnpm astro ...`                 | `astro add`, `astro check` などのコマンドを実行 |
| `pnpm astro --help`              | Astro CLI のヘルプを表示                        |

---


