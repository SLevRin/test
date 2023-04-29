import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('login')
  return <div className="flex h-screen items-center justify-center">{t('title')}</div>
}
