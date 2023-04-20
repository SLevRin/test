import 'tailwindcss/tailwind.css'

import { useLocale } from 'next-intl'

export const metadata = {
  title: 'Elife Driver Mobile App',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = useLocale()
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  )
}
