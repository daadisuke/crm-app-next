# crm-app → crm-app-next 移行タスク一覧

## 進捗概要

- **全体進捗**: 22% (2/9 フェーズ完了)
- **最終更新**: 2024年

---

## Phase 1: 基盤設定と依存関係 ✅

- [x] `package.json`の更新
  - [x] React Query (@tanstack/react-query) の追加
  - [x] Emotion関連パッケージの追加
  - [x] MUI関連パッケージの追加
  - [x] その他必要な依存関係の追加
- [x] `next.config.ts`の設定
  - [x] basePath: '/crm-app' の設定
  - [x] Emotion設定
  - [x] その他必要な設定
- [x] `tsconfig.json`の更新
  - [x] パスエイリアス（`~/*` → `./app/*`）の設定
  - [x] 型定義パス（`api-gateway-client`）の設定
  - [x] その他必要な設定
- [ ] 環境変数の設定
  - [ ] `.env.local`の作成
  - [ ] 必要な環境変数の設定

---

## Phase 2: セッション管理とミドルウェア ✅

- [x] `lib/session.server.ts`の作成
  - [x] `cookies()` APIを使用したセッション管理
  - [x] `getSessionInfo()` の実装
  - [x] `createUserSession()` の実装
  - [x] `destroySession()` の実装
  - [x] `requireUserId()` の実装
  - [x] `getCommonApiParams()` の実装
- [x] `middleware.ts`の実装
  - [x] 認証チェック機能
  - [ ] アクセスログ機能（オプション）
  - [x] パブリックルートの判定
  - [x] リダイレクト処理
- [x] セッション関連の型定義をコピー
  - [x] `app/types/Session.ts`
  - [x] `app/types/Bank.ts`
  - [x] `app/types/api/CommonApiParams.ts`
  - [x] `app/utils/auth.ts`
  - [x] `app/utils/errors.ts`

---

## Phase 3: テーマとレイアウト

- [ ] テーマファイルのコピー
  - [ ] `app/theme/themePrimitives.ts`
  - [ ] `app/theme/AppTheme.tsx`
  - [ ] `app/theme/customizations/*.tsx` (6ファイル)
- [ ] ルートレイアウト（`app/layout.tsx`）の実装
  - [ ] HTML構造の実装
  - [ ] AppThemeの統合
  - [ ] メタデータの設定
- [ ] グローバルCSSの移行
  - [ ] `app/globals.css`の作成
  - [ ] スタイルの移行

---

## Phase 4: 認証機能

- [ ] 認証レイアウト（`app/(auth)/layout.tsx`）
  - [ ] レイアウトコンポーネントの作成
- [ ] ログインページ（`app/(auth)/login/page.tsx`）
  - [ ] ログインフォームの実装
  - [ ] 認証処理の実装
  - [ ] エラーハンドリング
- [ ] SAML認証の移行（必要に応じて）
  - [ ] SAML ACSエンドポイント（`app/api/auth/acs/route.ts`）
  - [ ] SAML SPメタデータ（`app/api/auth/sp-metadata/route.ts`）
  - [ ] ポータルリダイレクト（`app/api/auth/redirect-to-portal/route.ts`）

---

## Phase 5: ダッシュボードレイアウト

- [ ] ダッシュボードレイアウト（`app/(dashboard)/layout.tsx`）
  - [ ] SideMenuコンポーネントの統合
  - [ ] セッション情報の取得と表示
- [ ] サイドメニューコンポーネントの移行
  - [ ] `app/components/layouts/SideMenu.tsx` の作成
  - [ ] `app/components/layouts/SideMenuNavigation.tsx` の作成
  - [ ] `app/components/layouts/SideMenuAccount.tsx` の作成
- [ ] ホームページの実装
  - [ ] `app/(dashboard)/page.tsx` の作成
  - [ ] セッション情報の表示

---

## Phase 6: 顧客検索機能

- [ ] 顧客検索ページ（`app/(dashboard)/customers/page.tsx`）
  - [ ] 検索フォームの実装
  - [ ] 検索ロジックの実装
  - [ ] エラーハンドリング
- [ ] 検索結果ページ（`app/(dashboard)/customers/results/page.tsx`）
  - [ ] 検索結果の表示
  - [ ] ページネーション
  - [ ] フィルタリング
- [ ] 検索API（`app/api/customers/results/search/route.ts`）
  - [ ] GETエンドポイントの実装
  - [ ] 検索パラメータの処理
  - [ ] レスポンスの返却

---

## Phase 7: 顧客詳細機能

- [ ] 顧客詳細レイアウト（`app/(dashboard)/customers/[id]/layout.tsx`）
  - [ ] レイアウトコンポーネントの作成
  - [ ] ナビゲーションの実装
- [ ] 個人顧客詳細
  - [ ] 基本情報ページ（`app/(dashboard)/customers/[id]/individual/top/page.tsx`）
  - [ ] 交渉応対履歴（`app/(dashboard)/customers/[id]/individual/approach-histories/page.tsx`）
  - [ ] 預り資産（`app/(dashboard)/customers/[id]/individual/assets/page.tsx`）
  - [ ] その他個人顧客関連ページ
- [ ] 法人顧客詳細
  - [ ] 基本情報ページ（`app/(dashboard)/customers/[id]/legal_entity/top/page.tsx`）
  - [ ] 預り資産（`app/(dashboard)/customers/[id]/legal_entity/assets/page.tsx`）
  - [ ] その他法人顧客関連ページ
- [ ] 顧客関連API Routes
  - [ ] `app/api/customers/[id]/assets/route.ts`
  - [ ] `app/api/customers/[id]/warning-codes/route.ts`
  - [ ] その他必要なAPI Routes

---

## Phase 8: その他の機能

- [ ] 交渉応対履歴
  - [ ] `app/(dashboard)/approach-histories/page.tsx`
  - [ ] 個人・法人・新規CIFの各ページ
- [ ] CIF開設先一覧
  - [ ] `app/(dashboard)/new-cifs/page.tsx`
- [ ] その他のルートの移行
  - [ ] 支店検索（`app/(dashboard)/branches/page.tsx`）
  - [ ] チャネル検索（`app/(dashboard)/channels/page.tsx`）
  - [ ] 担当者検索（`app/(dashboard)/staffs/page.tsx`）
  - [ ] 設定（`app/(dashboard)/settings/device-type/page.tsx`）
  - [ ] ヘルスチェック（`app/api/healthcheck/*/route.ts`）

---

## Phase 9: 最適化とテスト

- [ ] パフォーマンス最適化
  - [ ] React Queryの設定最適化
  - [ ] 画像最適化
  - [ ] コード分割の確認
- [ ] エラーハンドリングの確認
  - [ ] エラーバウンダリの実装
  - [ ] 404ページの実装
  - [ ] 500ページの実装
- [ ] 型安全性の確認
  - [ ] TypeScriptエラーの解消
  - [ ] 型定義の確認
- [ ] テスト
  - [ ] 主要機能の動作確認
  - [ ] ブラウザテスト
  - [ ] パフォーマンステスト

---

## 追加タスク: React Query統合

- [ ] React Query Providerの設定
  - [ ] `app/providers/QueryProvider.tsx` の作成
  - [ ] `app/layout.tsx` への統合
  - [ ] デフォルト設定の最適化
- [ ] 既存のfetcher使用箇所の移行
  - [ ] 顧客検索でのReact Query使用
  - [ ] 顧客詳細でのReact Query使用
  - [ ] その他データフェッチ箇所の移行
- [ ] ミューテーションの実装
  - [ ] 顧客情報更新のミューテーション
  - [ ] フォーム送信のミューテーション
  - [ ] キャッシュ無効化の実装

---

## 参考情報

### 主要な移行マッピング

| React Router v7 | Next.js App Router |
|----------------|-------------------|
| `app/routes/*/route.tsx` | `app/*/page.tsx` |
| `app/routes/*/loader.ts` | `app/*/page.tsx` (async component内) |
| `app/routes/*/action.ts` | `app/*/actions.ts` (Server Actions) |
| `app/routes/*/search.tsx` | `app/api/*/route.ts` |
| `app/layouts/SideMenu.tsx` | `app/(dashboard)/layout.tsx` |
| `app/middleware/*.server.ts` | `middleware.ts` |
| `app/root.tsx` | `app/layout.tsx` |
| `app/session.server.ts` | `lib/session.server.ts` |

### 重要な注意点

1. **Server Components vs Client Components**
   - デフォルトでServer Componentsを使用
   - `'use client'`は必要な場合のみ

2. **データフェッチング**
   - Server Components: 直接async/await
   - Client Components: React Query推奨

3. **セッション管理**
   - `cookies()` APIを使用（`next/headers`からインポート）

4. **環境変数**
   - `import.meta.env` → `process.env`
   - クライアント側は`NEXT_PUBLIC_`プレフィックスが必要

---

## 更新履歴

- 2024年: タスクリスト作成

