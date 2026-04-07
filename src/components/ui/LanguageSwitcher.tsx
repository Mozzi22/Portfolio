'use client'

import { clsx } from 'clsx'
import { useLocale } from 'next-intl'

import { routing, usePathname, useRouter } from '@/i18n/routing'

const LanguageSwitcher = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const toggleLanguage = (newLocale: string) => {
    router.replace(pathname, {
      locale: newLocale as (typeof routing.locales)[number]
    })
  }

  return (
    <div className="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => toggleLanguage(loc)}
          className={clsx(
            'cursor-pointer px-3 py-1 text-xs font-bold rounded-full transition-all uppercase tracking-wider',
            locale === loc
              ? 'bg-primary text-white shadow-sm'
              : 'text-slate-500 hover:text-primary'
          )}
        >
          {loc}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
