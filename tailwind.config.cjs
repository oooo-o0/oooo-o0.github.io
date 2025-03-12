/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme') // Tailwind CSSのデフォルトテーマをインポート

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}'], // 対象ファイルを指定（Tailwindのクラス名を含むファイル）
  darkMode: 'class', // ダークモードを手動で切り替え可能に設定
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif', ...defaultTheme.fontFamily.sans], // フォントをRobotoに変更、デフォルトのsansフォントを追加
      },
    },
  },
  plugins: [require('@tailwindcss/typography')], // Typographyプラグインを利用（テキストのスタイル向上）
}
