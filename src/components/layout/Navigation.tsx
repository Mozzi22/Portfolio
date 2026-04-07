'use client'

import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { PAGES } from '@/constants/pages-routes'
import { Link, usePathname } from '@/i18n/routing'

import LanguageSwitcher from '../ui/LanguageSwitcher'

const navItems = [
  { href: '/', labelKey: 'home' },
  { href: PAGES.PROJECTS, labelKey: 'projects' },
  { href: PAGES.ABOUT, labelKey: 'about' }
] as const

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('Navigation')

  const handleToggleMenu = () => setIsOpen((prev) => !prev)
  const handleCloseMenu = () => setIsOpen(false)

  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full p-4 md:p-6 z-50 flex items-center justify-between pointer-events-none">
        <Link
          href="/"
          className="pointer-events-auto"
          onClick={handleCloseMenu}
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width={48}
            height={48}
            className="hover:scale-105 transition-transform duration-300 drop-shadow-md w-10 h-10 md:w-12 md:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex pointer-events-auto justify-end items-center space-x-4">
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

        {/* Mobile Burger Button - Left aligned */}
        <div className="md:hidden flex space-x-4 pointer-events-auto">
          <LanguageSwitcher />
          <button
            onClick={handleToggleMenu}
            className="pointer-events-auto p-2 bg-white/80 backdrop-blur-md rounded-xl border border-slate-200 shadow-sm text-slate-600 active:scale-95 transition-all"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Modal Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 md:hidden bg-white/95 backdrop-blur-xl flex flex-col pt-24 px-8"
          >
            <ul className="flex flex-col space-y-6">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== '/' && pathname.startsWith(item.href))
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={handleCloseMenu}
                      className={clsx(
                        'text-3xl font-extrabold transition-colors',
                        isActive ? 'text-primary' : 'text-slate-800'
                      )}
                    >
                      {t(item.labelKey)}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
