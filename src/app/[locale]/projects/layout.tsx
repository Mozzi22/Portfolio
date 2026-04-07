'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { ReactNode, useState } from 'react'

import ProjectList from '@/app/[locale]/projects/[id]/components/ProjectList'
import { usePathname } from '@/i18n/routing'
import { selectProjects } from '@/store/features/projectsSlice'
import { useAppSelector } from '@/store/hooks'

const ProjectsLayout = ({ children }: { children: ReactNode }) => {
  const projects = useAppSelector(selectProjects)
  const pathname = usePathname()
  const t = useTranslations('Projects')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClose = () => setIsModalOpen(false)
  const handleOpen = () => setIsModalOpen(true)

  const activeProject = projects.find((p) => pathname === `/projects/${p.id}`)

  return (
    <div className="flex flex-col md:flex-row h-full min-h-[calc(100vh-200px)] relative">
      {/* Mobile Sticky Selection Bar */}
      <button
        onClick={handleOpen}
        className="md:hidden sticky top-20 z-30 mx-4 my-2 bg-white/80 backdrop-blur-md flex items-center w-fit text-primary font-bold text-sm px-4 py-2 rounded-full border border-primary/20"
      >
        <span>{activeProject ? activeProject.title : t('allProjects')}</span>
        <ChevronRight size={16} className="mt-0.5" />
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-72 bg-sidebar-bg border-r border-slate-200 p-6 flex-col space-y-6">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 uppercase mb-4">
          {t('allProjects')}
        </h2>
        <ProjectList projects={projects} pathname={pathname} />
      </aside>

      {/* Mobile Projects Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] md:hidden bg-white/98 backdrop-blur-xl flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-slate-100">
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900 uppercase">
                {t('allProjects')}
              </h2>
              <button
                onClick={handleClose}
                className="p-2 bg-slate-100 rounded-full text-slate-600"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-grow overflow-y-auto p-6 bg-slate-50/50">
              <ProjectList
                projects={projects}
                pathname={pathname}
                onItemClick={handleClose}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow p-6 md:p-12 overflow-auto bg-white">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>
    </div>
  )
}

export default ProjectsLayout
