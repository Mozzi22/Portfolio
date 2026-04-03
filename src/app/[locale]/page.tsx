'use client'

import { useTranslations } from 'next-intl'

import ProjectCard from '@/components/ui/ProjectCard'
import { selectProjects } from '@/store/features/projectsSlice'
import { useAppSelector } from '@/store/hooks'

const Home = () => {
  const projects = useAppSelector(selectProjects)
  const t = useTranslations('Hero')
  const tProjects = useTranslations('Projects')

  return (
    <div className="container mx-auto px-6 py-12 flex flex-col space-y-24">
      <section className="flex flex-col items-center text-start max-w-4xl space-y-6">
        <div>
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-widest mb-6 inline-block">
            {t('jobTitle')}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('greeting')}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            {t('description')}
          </p>
        </div>
      </section>

      <section className="space-y-12">
        <div className="flex flex-col items-start text-start space-y-4 w-content w-fit">
          <h2 className="text-4xl font-bold tracking-tight">
            {tProjects('title')}
          </h2>
          <div className="h-1.5 w-full bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
