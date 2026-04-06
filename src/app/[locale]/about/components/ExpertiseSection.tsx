import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { useTranslations } from 'next-intl'

const skills = [
  { name: 'React', level: '100%', years: '5+' },
  { name: 'Next.js', level: '100%', years: '5+' },
  { name: 'TypeScript', level: '60%', years: '3+' },
  { name: 'Redux Toolkit', level: '80%', years: '4+' },
  { name: 'WebSockets', level: '100%', years: '5+' },
  { name: 'React Hook Form + Yup', level: '80%', years: '4+' },
  { name: 'CSS / SCSS', level: '100%', years: '5+' },
  { name: 'Tailwind CSS / MUI / Bootstrap', level: '80%', years: '4+' },
  { name: 'i18next', level: '100%', years: '5+' }
]

const ExpertiseSection = () => {
  const t = useTranslations('About')

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-2 text-accent font-bold tracking-widest uppercase text-sm">
        <Briefcase size={16} />
        <span>{t('expertise')}</span>
      </div>
      <h2 className="text-3xl font-bold">{t('myCoreTechStack')}</h2>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center text-sm font-bold">
              <span>{skill.name}</span>
              <span className="text-primary">
                {t('countYears', { count: skill.years })}
              </span>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-primary"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExpertiseSection
