import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('Footer')

  return (
    <footer className="w-full py-8 border-t border-slate-200 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center text-slate-500 text-sm">
        <p>{t('copyright')}</p>
      </div>
    </footer>
  )
}

export default Footer
