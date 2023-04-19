import clsx from 'clsx'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('login')
  return (
    <div className={clsx('flex')}>
      <div>{t('title')}</div>
    </div>
  )
}
