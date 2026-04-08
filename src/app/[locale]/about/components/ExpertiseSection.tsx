import { Briefcase } from 'lucide-react'
import { useTranslations } from 'next-intl'

const skills = [
  { name: 'React', years: '5+' },
  { name: 'Next.js', years: '5+' },
  { name: 'TypeScript', years: '3+' },
  { name: 'Redux Toolkit', years: '4+' },
  { name: 'WebSockets', years: '5+' },
  { name: 'React Hook Form + Yup', years: '4+' },
  { name: 'CSS / SCSS', years: '5+' },
  { name: 'Tailwind CSS / MUI / Bootstrap', years: '4+' },
  { name: 'i18next', years: '5+' }
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExpertiseSection
