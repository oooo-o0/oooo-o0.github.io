import postcssImport from 'postcss-import' // 複数のCSSファイルを1つにまとめる
import tailwindcss from 'tailwindcss' // Tailwind CSSを使用する
import postcssNesting from 'tailwindcss/nesting/index.js' // CSSのネストを使えるようにする

export default {
  plugins: {
    'postcss-import': postcssImport, // CSSファイルをまとめる
    'tailwindcss/nesting': postcssNesting, // ネスト機能を有効にする
    tailwindcss: tailwindcss, // Tailwind CSSのスタイルを使用する
  },
}
