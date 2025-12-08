import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isPublicRoute } from './app/utils/auth';

/**
 * IPv4アドレスの各オクテットが0-255の範囲内かを検証
 */
function isValidIPv4(ip: string): boolean {
  const octets = ip.split('.');

  if (octets.length !== 4) {
    return false;
  }

  return octets.every((octet) => {
    const num = parseInt(octet, 10);
    return num >= 0 && num <= 255 && octet === num.toString();
  });
}

/**
 * IPアドレス文字列からIPv4アドレスのみを抽出する関数
 */
function extractIPv4(ip: string | undefined | null): string | null {
  if (!ip || typeof ip !== 'string') {
    return null;
  }

  const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;

  if (ipv4Pattern.test(ip)) {
    return isValidIPv4(ip) ? ip : null;
  }

  const ipv6MappedPattern = /^::ffff:(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/i;
  const match = ip.match(ipv6MappedPattern);

  if (match && match[1]) {
    const extractedIPv4 = match[1];
    return isValidIPv4(extractedIPv4) ? extractedIPv4 : null;
  }

  return null;
}

/**
 * リクエストからIPv4アドレスを取得
 */
function getIPv4FromRequest(request: NextRequest): string | null {
  const forwardedFor = request.headers.get('x-forwarded-for');

  if (forwardedFor) {
    const ips = forwardedFor.split(',').map((ip) => ip.trim());

    for (const ip of ips) {
      const ipv4 = extractIPv4(ip);
      if (ipv4) {
        return ipv4;
      }
    }
  }

  const ip = request.ip;
  return extractIPv4(ip);
}

/**
 * セッション情報をクッキーから取得
 */
function getSessionFromCookie(request: NextRequest): { userId?: string } | null {
  const userId = request.cookies.get('crm-user-id')?.value;
  if (!userId) {
    return null;
  }
  return { userId };
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // セッション検証
  const session = getSessionFromCookie(request);

  // アクセスログ用の情報を取得（後で実装）
  const ip = getIPv4FromRequest(request) || '-';
  const referer = request.headers.get('referer') || '-';
  const userAgent = request.headers.get('user-agent') || '-';

  // 認証チェック
  if (!isPublicRoute(request.url) && !session) {
    const loginUrl = new URL('/crm-app/login', request.url);
    loginUrl.searchParams.set('redirectTo', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 認証済みユーザーがログインページにアクセスした場合、ホームにリダイレクト
  if (pathname === '/crm-app/login' && session) {
    return NextResponse.redirect(new URL('/crm-app', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

