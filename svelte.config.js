import { vitePreprocess } from '@astrojs/svelte' // Svelteのプリプロセス設定をインポート

export default {
  preprocess: [vitePreprocess({ script: true })], // スクリプトの処理を有効にする設定
}
