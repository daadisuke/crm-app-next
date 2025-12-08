/**
 * 認証不要なルートのパス定義
 */
export const PUBLIC_ROUTES = ['/auth/acs', '/version', '/diagnostics'] as const;

/**
 * 指定されたURLが認証不要なルートかどうかを判定
 * @param url - チェック対象のURL
 * @returns 認証不要なルートの場合true
 */
export function isPublicRoute(url: string): boolean {
  const pathname = new URL(url).pathname;

  // CRMアプリのパス（/crm-app）を除去して正規化
  const normalizedPath = pathname.replace(/^\/crm-app/, '') || '/';

  return PUBLIC_ROUTES.some((route) => normalizedPath === route);
}

