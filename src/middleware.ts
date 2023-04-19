import createI18nMiddleware from 'next-intl/middleware'

export default createI18nMiddleware({
  locales: ['en-US', 'zh-CN'],
  defaultLocale: 'en-US',
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
