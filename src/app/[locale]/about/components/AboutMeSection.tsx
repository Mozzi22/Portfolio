import { motion } from 'framer-motion'
import { Code2, User } from 'lucide-react'
import { useTranslations } from 'next-intl'

const AboutMeSection = () => {
  const t = useTranslations('About')

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="flex items-center space-x-2 text-primary font-bold tracking-widest uppercase text-sm">
          <User size={16} />
          <span>{t('aboutMe')}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          {t('aboutMeTitle')}
          <span className="text-primary italic">{t('purpose')}</span>.
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed font-medium">
          {t('aboutMeDesc')}
        </p>
        <div className="flex space-x-8 pt-4">
          <div>
            <div className="text-3xl font-bold text-primary">5+</div>
            <div className="text-sm font-bold uppercase tracking-wider text-slate-400">
              {t('yearsExperience')}
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">16+</div>
            <div className="text-sm font-bold uppercase tracking-wider text-slate-400">
              {t('projectsDone')}
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="aspect-square relative rounded-3xl overflow-hidden bg-gradient-to-tr from-primary to-accent p-1"
      >
        <div className="w-full h-full bg-slate-100 rounded-[calc(1.5rem-4px)] flex items-center justify-center p-8">
          <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center text-primary">
            <Code2 size={64} />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutMeSection
