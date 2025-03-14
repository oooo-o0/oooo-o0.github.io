import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

// サイトの基本設定
export const siteConfig: SiteConfig = {
  title: 'Dev Wiki', // サイトのタイトル
  subtitle: 'テックブログ', // サイトのサブタイトル
  lang: 'ja', // 言語設定 ('en', 'ja', 'zh_CN' など)
  themeColor: {
    hue: 250, // テーマカラーの色相 (0〜360, 例: 赤 0, 青緑 200, シアン 250, ピンク 345)
    fixed: false, // 訪問者がテーマカラーを変更できるか
  },
  banner: {
    enable: false, // バナー画像を表示するか
    src: 'assets/images/demo-banner.png', // バナー画像のパス
    position: 'center', // バナーの表示位置 ('top', 'center', 'bottom')
    credit: {
      enable: false, // バナー画像のクレジットを表示するか
      text: '', // クレジットのテキスト
      url: '' // 画像の出典URL
    }
  },
  toc: {
    enable: true, // 記事の目次を表示するか
    depth: 3 // 目次に表示する見出しの最大レベル (1〜3)
  },
  favicon: [ // サイトアイコンの設定 (空の配列の場合、デフォルトのファビコンを使用)
    // {
    //   src: '/favicon/icon.png', // ファビコンのパス
    //   theme: 'light', // ライトモード・ダークモード用のアイコンを分ける場合
    //   sizes: '32x32', // ファビコンのサイズ指定
    // }
  ]
}

// ナビゲーションバーの設定
export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home, // ホームページへのリンク
    LinkPreset.Archive, // 記事のアーカイブページへのリンク
    LinkPreset.About, // 自己紹介ページへのリンク
    {
      name: 'GitHub',
      url: 'https://github.com/oooo-o0', // 外部リンク (GitHub)
      external: true, // 別タブで開き、外部リンクアイコンを表示
    },
  ],
}

// プロフィール設定
export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/demo-avatar.png', // プロフィール画像のパス
  name: 'Sui', // ユーザー名
  bio: '勉強記録。', // 自己紹介文
  links: [ // SNSや外部サービスのリンク
    {
      name: 'X',
      icon: 'fa6-brands:x-twitter', // アイコン (https://icones.js.org/ でコード確認可)
      url: 'https://x.com/________Sui__', // pnpm add @iconify-json/<icon-set-name>
    },
    {
      name: 'Email',
      icon: 'weui:email-outlined',
      url: '',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/oooo-o0',
    },
  ],
}

// ライセンス設定
export const licenseConfig: LicenseConfig = {
  enable: true, // ライセンスを表示するか
  name: 'CC BY-NC-SA 4.0', // 使用ライセンスの名前
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/', // ライセンスの詳細ページ
}
