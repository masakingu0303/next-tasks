# CLAUDE.md

このファイルは、このリポジトリでコードを扱う際のClaude Code (claude.ai/code) への指針を提供します。

## プロジェクト構造

これは App Router アーキテクチャを使用したTypeScript対応のNext.js 15プロジェクトです。メインのアプリケーションコードは `my-app/` にあります。

### 主要ディレクトリ
- `my-app/src/app/` - Next.js App Router のページとレイアウト
- `my-app/src/app/(main)/` - サイドバーレイアウトを持つメインアプリケーションのルートグループ
- `my-app/public/` - 静的アセット（SVGアイコン）

### アーキテクチャの注意点
- ルートグループを使用したApp Routerを採用：`(main)` にはサイドバーレイアウトを持つページが含まれる
- ルートレイアウト（`src/app/layout.tsx`）でフォント（Geist Sans, Geist Mono）とグローバルメタデータを設定
- メインレイアウト（`src/app/(main)/layout.tsx`）でflexレイアウトを使用したサイドバーレイアウトを実装
- TypeScriptパスマッピング：`@/*` は `./src/*` にマップされる

## 開発コマンド

すべてのコマンドは `my-app/` ディレクトリから実行してください：

```bash
# Turbopackを使用した開発サーバー
npm run dev

# Turbopackを使用したプロダクションビルド
npm run build

# プロダクションサーバーの開始
npm run start

# ESLintによるコードリント
npm run lint
```

## 技術スタック

- **フレームワーク**: Next.js 15.5.3 with App Router
- **ランタイム**: React 19.1.0
- **言語**: TypeScript 5
- **スタイリング**: Tailwind CSS 4 with PostCSS
- **バンドラー**: Turbopack（開発・ビルド時に有効）
- **リント**: ESLint with Next.js config

## 設定ファイル

- `next.config.ts` - Next.js設定（最小セットアップ）
- `tsconfig.json` - Next.jsプラグインを含むTypeScript設定
- `eslint.config.mjs` - Next.jsルールを含むESLint flat config
- `postcss.config.mjs` - Tailwind CSS用のPostCSS設定
- `tailwindcss` - PostCSSプラグインを通じて設定

## 開発に関する注意事項

- プロジェクトは高速なビルドと開発のためにTurbopackを使用
- ESLintはNext.js Core Web VitalsとTypeScriptルールで設定済み
- Tailwind CSSはv4プラグインを通じてPostCSSでセットアップ
- フォント最適化にはNext.js組み込みのGoogle Fontsサポートを使用