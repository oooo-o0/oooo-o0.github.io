---
title: 投稿の仕方
published: 2025-03-01
description: "投稿管理と記事作成について"
image: "./cover.jpeg"
tags: [Astro, Markdown]
category: テンプレート
draft: false
---

> 表紙画像の出典: [Source](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5),girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg)

このサイトは [Astro](https://astro.build/)で構築されています。
このガイドに記載されていない事項については[Astro Docs](https://docs.astro.build/)を参照してください.

## 投稿例

```yaml
---
title: 雪見大福のおいしい食べ方
published: 2023-09-09
description: 雪見だいふくの珍しい食べ方について
image: ./cover.jpg
tags: [アイス, レシピ]
category: 食べ物
draft: false
---
```

| Attribute     | Description                                                                                                                                                                                            |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`       | 記事タイトル                                                                                                                                                                                           |
| `published`   | 記事が公開された日付                                                                                                                                                                                   |
| `description` | 投稿の簡単な説明。トップページで表示される                                                                                                                                                             |
| `image`       | 記事の表紙画像のパス。<br/>1. `http://` または `https://`: で始まるWeb画像を使用<br/>2. `/`: で始まるdirディレクトリ内の画像を使用<br/>3. With none of the prefixes:マークダウンファイルからの相対パス |
| `tags`        | 記事タグ                                                                                                                                                                                               |
| `category`    | 記事カテゴリ                                                                                                                                                                                           |
| `draft`       | 記事が下書きの場合の表示設定                                                                                                                                                                           |

## 投稿ファイイルの配置



投稿ファイルは `src/content/posts/` ディレクトリに配置する必要があります。投稿やアセットをより整理したい場合、サブディレクトリを作成することもできます。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```

## GitHub リポジトリ カード
GitHubリポジトリにリンクする動的カードを追加できます。<br>ページの読み込み時に、リポジトリ情報が GitHub API から取得されます。

::github{repo="me-o0/Note"}

下記のコードを使用して GitHub リポジトリ カードを作成します `::github{repo="<owner>/<repo>"}`.

```markdown
::github{repo="me-o0/Note"}
```

## アラート

次のタイプのアラートがサポートされています: `note` `tip` `important` `warning` `caution`

:::note
ユーザーが考慮すべき情報。（注記）
:::

:::tip
ユーザーへのオプション情報。（ヒント）
:::

:::important
必要な情報。（重要）
:::

:::warning
潜在的なリスクがあるため、ユーザーに即時の注意を必要とする情報。（警告）
:::

:::caution
行動によって生じる可能性のある否定的な結果についての情報。（注意）
:::

### 基本構文

```markdown
:::note
この投稿は参考情報が古いため最新の情報とは事実が異なる場合があります。
:::

:::tip
色もカスタマイズ可能です
:::
```

### カスタムタイトル

アラートのタイトルはカスタマイズできます。

:::note[注記]
この投稿は参考情報が古いため最新の情報とは事実が異なる場合があります。
:::

```markdown
:::note[注記]
この投稿は参考情報が古いため最新の情報とは事実が異なる場合があります。
:::
```

### GitHub 構文

> [!TIP]
> [GitHub構文](https://github.com/orgs/community/discussions/16925)もサポートされています。

```
> [!TIP]
> GitHub構文もサポートされています。

> [!ヒント]
> GitHub構文もサポートされています。
```