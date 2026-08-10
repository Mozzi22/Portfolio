'use client'

import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Link } from '@/i18n/routing'
import type { Project } from '@/types/Project'

type Props = {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  const t = useTranslations('Projects')

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200"
    >
      <div className="aspect-video relative overflow-hidden bg-slate-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
          {t(`categories.${project.category}`)}
        </span>
        <h3 className="text-xl font-bold mb-2 transition-colors">
          {project.title}
        </h3>
        <div className="inline-flex items-center space-x-2 text-sm font-bold text-primary hover:text-primary-hover underline underline-offset-4">
          <span>{t('viewDetails')}</span>
          <ExternalLink size={14} />
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
