import 'tailwindcss/tailwind.css'

import { useLocale } from 'next-intl'

export const metadata = {
  title: 'Elife Driver Mobile App',
}

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const locale = useLocale()
  return (
    <html lang={locale}>
      <body>
        <div>{params.locale}</div>
        <div>{children}</div>
      </body>
    </html>
  )
}
