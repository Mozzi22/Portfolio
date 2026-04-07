'use client'

import { ArrowLeft } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { useAppSelector } from '@/store/hooks'

const ProjectsOverview = () => {
  const projects = useAppSelector((state) => state.projects.items)

  const t = useTranslations('Projects')

  return (
    <div className="h-full flex flex-col items-center justify-center text-center space-y-8 py-20">
      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary">
        <ArrowLeft size={48} className="animate-pulse" />
      </div>
      <div className="space-y-4 max-w-md">
        <h1 className="text-3xl font-extrabold tracking-tight">
          {t('exploreMyWork')}
        </h1>
        <p className="text-slate-600">
          {t('exploreMyWorkDesc', { count: projects.length })}
        </p>
        <p className="text-sm font-bold text-primary">
          {t('exploreMyWorkAction')}
        </p>
      </div>
    </div>
  )
}

export default ProjectsOverview
