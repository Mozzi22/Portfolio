'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { getProjectData } from '@/app/[locale]/projects/[id]/helpers'
import { selectProjectById } from '@/store/features/projectsSlice'
import { useAppSelector } from '@/store/hooks'

const ProjectDetail = () => {
  const { id } = useParams<{ id: string | undefined }>()

  const project = useAppSelector(selectProjectById(id))

  const t = useTranslations('ProjectDetails')

  if (!id || !project) {
    return (
      <div className="text-center py-20 text-slate-500">{t('notFound')}</div>
    )
  }

  const { techStack, Icon } = getProjectData(id, project.category)

  return (
    <div key={project.id} className="space-y-12">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-primary/10 text-primary rounded-2xl">
            <Icon size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              {project.title}
            </h1>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              {project.category}
            </span>
          </div>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 flex">
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl md:text-left">
            {t(`description-${id}`)}
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl w-full md:w-1/3 flex">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-slate-200 dark:border-slate-800">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{t('aboutProject')}</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {t(`details-${id}`)}
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{t('techStack')}</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-bold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
