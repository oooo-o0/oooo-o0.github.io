import sitemap from '@astrojs/sitemap' // サイトマップを生成
import svelte from '@astrojs/svelte' // Svelte統合
import tailwind from '@astrojs/tailwind' // Tailwind CSS統合
import swup from '@swup/astro' // Swupによるページ遷移のアニメーション
import Compress from 'astro-compress' // コンテンツ圧縮
import icon from 'astro-icon' // アイコンの統合
import { defineConfig } from 'astro/config' // Astro設定を定義
import rehypeAutolinkHeadings from 'rehype-autolink-headings' // 見出しに自動リンクを追加
import rehypeComponents from 'rehype-components' /* カスタムディレクティブをレンダリング */
import rehypeKatex from 'rehype-katex' // 数式表示用のKaTeX統合
import rehypeSlug from 'rehype-slug' // スラッグを自動生成
import remarkDirective from 'remark-directive' /* マークダウンでのディレクティブ処理 */
import remarkGithubAdmonitionsToDirectives from 'remark-github-admonitions-to-directives' // GitHubアドモニションをディレクティブに変換
import remarkMath from 'remark-math' // 数学式用のマークダウン処理
import remarkSectionize from 'remark-sectionize' // セクション分け
import { AdmonitionComponent } from './src/plugins/rehype-component-admonition.mjs' // Admonitionコンポーネント
import { GithubCardComponent } from './src/plugins/rehype-component-github-card.mjs' // GitHubカードコンポーネント
import { parseDirectiveNode } from './src/plugins/remark-directive-rehype.js' // ディレクティブノードのパース
import { remarkExcerpt } from './src/plugins/remark-excerpt.js' // 抜粋を取得
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs' // 読書時間を計算

// https://astro.build/config
export default defineConfig({
  site: 'https://oooo-o0.github.io', // サイトURL // ベースパス
  trailingSlash: 'always', // スラッシュを常に末尾に付ける
  integrations: [
    tailwind({
      nesting: true, // Tailwindでネスト機能を有効化
    }),
    swup({
      theme: false, // Swupテーマを無効化
      animationClass: 'transition-swup-', // アニメーションクラス
      containers: ['main', '#toc'], // Swupで遷移するコンテナを指定
      smoothScrolling: true, // スムーズスクロールを有効化
      cache: true, // キャッシュを有効化
      preload: true, // プリロードを有効化
      accessibility: true, // アクセシビリティ対応
      updateHead: true, // ヘッド情報を更新
      updateBodyClass: false, // ボディクラスの更新を無効化
      globalInstance: true, // グローバルインスタンス
    }),
    icon({
      include: {
        'preprocess: vitePreprocess(),': ['*'], // Viteのプリプロセスを処理
        'fa6-brands': ['*'], // ブランドアイコン
        'fa6-regular': ['*'], // レギュラーアイコン
        'fa6-solid': ['*'], // ソリッドアイコン
      },
    }),
    svelte(), // Svelteを統合
    sitemap(), // サイトマップを生成
    Compress({
      CSS: false, // CSS圧縮を無効化
      Image: false, // 画像圧縮を無効化
      Action: {
        Passed: async () => true, // アクション処理
      },
    }),
  ],
  markdown: {
    remarkPlugins: [
      remarkMath, // 数学式プラグイン
      remarkReadingTime, // 読書時間プラグイン
      remarkExcerpt, // 抜粋プラグイン
      remarkGithubAdmonitionsToDirectives, // GitHubアドモニションプラグイン
      remarkDirective, // マークダウンディレクティブ
      remarkSectionize, // セクション分けプラグイン
      parseDirectiveNode, // ディレクティブノードのパース
    ],
    rehypePlugins: [
      rehypeKatex, // KaTeXプラグイン
      rehypeSlug, // スラッグ生成プラグイン
      [
        rehypeComponents,
        {
          components: {
            github: GithubCardComponent, // GitHubカードコンポーネント
            note: (x, y) => AdmonitionComponent(x, y, 'note'), // ノートアドモニション
            tip: (x, y) => AdmonitionComponent(x, y, 'tip'), // ヒントアドモニション
            important: (x, y) => AdmonitionComponent(x, y, 'important'), // 重要アドモニション
            caution: (x, y) => AdmonitionComponent(x, y, 'caution'), // 注意アドモニション
            warning: (x, y) => AdmonitionComponent(x, y, 'warning'), // 警告アドモニション
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append', // 見出しにリンクを追加
          properties: {
            className: ['anchor'], // リンクにクラスを追加
          },
          content: {
            type: 'element',
            tagName: 'span',
            properties: {
              className: ['anchor-icon'],
              'data-pagefind-ignore': true,
            },
            children: [
              {
                type: 'text',
                value: '#',
              },
            ],
          },
        },
      ],
    ],
  },
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // 特定の警告を無視
          if (
            warning.message.includes('is dynamically imported by') &&
            warning.message.includes('but also statically imported by')
          ) {
            return
          }
          warn(warning)
        },
      },
    },
  },
})
