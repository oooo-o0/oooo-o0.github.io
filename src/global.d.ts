import type { AstroIntegration } from '@swup/astro' // swupの型定義をインポート

declare global {
  interface Window {
    // '@swup/astro' の型定義が正しくないため、swupに型を指定
    swup: AstroIntegration // swupのインスタンスを型指定
  }
}
