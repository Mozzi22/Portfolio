import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('Footer')

  return (
    <footer className="w-full py-8 border-t border-slate-200 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <p>{t('copyright')}</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <div className="hover:text-primary transition-colors cursor-pointer">
            {t('github')}
          </div>
          <div className="hover:text-primary transition-colors cursor-pointer">
            {t('linkedin')}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
