import { NextResponse } from 'next/server';

const locales = ['ar', 'en'];
const defaultLocale = 'ar';

export default function middleware(request) {
  const { pathname } = request.nextUrl;

  // Explicitly ignore API and static files
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/Images') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|api|Images|favicon.ico|robots.txt|sitemap.xml).*)'],
};
