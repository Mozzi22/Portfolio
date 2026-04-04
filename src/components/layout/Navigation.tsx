'use client'

import { clsx } from 'clsx'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { PAGES } from '@/constants/pages-routes'
import { Link, usePathname } from '@/i18n/routing'

import LanguageSwitcher from '../ui/LanguageSwitcher'

const navItems = [
  { href: '/', labelKey: 'home' },
  { href: PAGES.PROJECTS, labelKey: 'projects' },
  { href: PAGES.ABOUT, labelKey: 'about' }
] as const

export const Navbar = () => {
  const pathname = usePathname()
  const t = useTranslations('Navigation')

  return (
    <div className="fixed top-0 left-0 right-0 w-full p-6 z-50 hidden md:flex items-center justify-between pointer-events-none">
      <Link href="/" className="pointer-events-auto ml-2">
        <Image
          src="/logo.svg"
          alt="logo"
          width={48}
          height={48}
          className="hover:scale-105 transition-transform duration-300 drop-shadow-md"
        />
      </Link>
      <nav className="pointer-events-auto md:flex justify-end items-center space-x-4">
        <ul className="flex space-x-8 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-slate-200">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href))
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    'text-sm font-medium transition-colors hover:text-primary',
                    isActive ? 'text-primary' : 'text-slate-600'
                  )}
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            )
          })}
        </ul>
        <LanguageSwitcher />
      </nav>
    </div>
  )
}

export const Footer = () => {
  const t = useTranslations('Footer')

  return (
    <footer className="w-full py-8 border-t border-slate-200 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <p>{t('copyright')}</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://github.com/Mozzi22/"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            {t('github')}
          </a>
          <a
            href="https://www.linkedin.com/in/nataliia-nikolaieva-3121a6221/"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            {t('linkedin')}
          </a>
        </div>
      </div>
    </footer>
  )
}
