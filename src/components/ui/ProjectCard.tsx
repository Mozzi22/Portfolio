'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Link } from '@/i18n/routing'
import type { Project } from '@/store/features/projectsSlice'

const ProjectCard = ({
  project,
  index
}: {
  project: Project
  index: number
}) => {
  const t = useTranslations('Projects')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-800"
    >
      <div className="aspect-video relative overflow-hidden bg-slate-100 dark:bg-slate-800">
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
          {t(`categories.${project.category}`)}
        </span>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
          {/*{project.description} todo description*/}
        </p>
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center space-x-2 text-sm font-bold text-primary hover:text-primary-hover underline underline-offset-4"
        >
          <span>{t('viewDetails')}</span>
          <ExternalLink size={14} />
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectCard
