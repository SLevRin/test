import '@/global.css'

import { useLocale } from 'next-intl'

import { Toaster } from '@/components/ui/toaster'

export const metadata = {
  title: 'Elife Driver Mobile App',
}

export default ({ children }: { children: React.ReactNode }) => {
  const locale = useLocale()
  return (
    <html lang={locale}>
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
