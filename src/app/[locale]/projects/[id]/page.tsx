'use client'

import { FileQuestion } from 'lucide-react'
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
      <div className="flex flex-col items-center justify-center py-32 text-center px-4 h-full animate-in fade-in duration-500">
        <div className="bg-slate-100 p-6 rounded-t-3xl rounded-br-3xl rounded-bl-xl mb-6 ring-1 ring-slate-200 shadow-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
          <FileQuestion size={48} className="text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">{t('notFound')}</h2>
      </div>
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
          <p className="text-xl text-slate-600 font-medium max-w-2xl md:text-left">
            {t(`description-${id}`)}
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl w-full md:w-1/3 flex">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-slate-200">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{t('aboutProject')}</h2>
          <p className="text-slate-600 leading-relaxed">{t(`details-${id}`)}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{t('techStack')}</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold"
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
