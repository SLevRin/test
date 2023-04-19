import createI18nMiddleware from 'next-intl/middleware'

export default createI18nMiddleware({
  locales: ['en', 'zh'],
  defaultLocale: 'en',
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
