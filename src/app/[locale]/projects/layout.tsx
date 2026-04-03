'use client'

import { type ClassValue, clsx } from 'clsx'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { Link, usePathname } from '@/i18n/routing'
import { selectProjects } from '@/store/features/projectsSlice'
import { useAppSelector } from '@/store/hooks'

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

const ProjectsLayout = ({ children }: { children: ReactNode }) => {
  const projects = useAppSelector(selectProjects)
  const pathname = usePathname()
  const t = useTranslations('Projects')

  return (
    <div className="flex flex-col md:flex-row h-full min-h-[calc(100vh-200px)]">
      <aside className="w-full md:w-72 bg-sidebar-bg border-r border-slate-200 dark:border-slate-800 p-6 flex flex-col space-y-6">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase mb-4">
          {t('allProjects')}
        </h2>
        <ul className="space-y-2">
          {projects.map((project) => {
            const isActive = pathname === `/projects/${project.id}`
            return (
              <li key={project.id}>
                <Link
                  href={`/projects/${project.id}`}
                  className={cn(
                    'flex flex-col p-3 rounded-xl transition-all duration-200 border',
                    isActive
                      ? 'bg-white dark:bg-slate-800 border-primary shadow-sm'
                      : 'bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-slate-800/50 hover:border-slate-200 dark:hover:border-slate-700'
                  )}
                >
                  <span
                    className={cn(
                      'text-sm font-bold truncate',
                      isActive
                        ? 'text-primary'
                        : 'text-slate-700 dark:text-slate-300'
                    )}
                  >
                    {project.title}
                  </span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>

      <main className="flex-grow p-6 md:p-12 overflow-auto bg-white dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>
    </div>
  )
}

export default ProjectsLayout
