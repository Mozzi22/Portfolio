import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { Link } from '@/i18n/routing'
import { Project } from '@/types/Project'

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

type Props = {
  projects: Project[]
  pathname: string
  onItemClick?: () => void
}

const ProjectList = ({ projects, pathname, onItemClick }: Props) => (
  <ul className="space-y-2">
    {projects.map((project) => {
      const isActive = pathname === `/projects/${project.id}`
      return (
        <li key={project.id}>
          <Link
            href={`/projects/${project.id}`}
            onClick={onItemClick}
            className={cn(
              'flex flex-col p-3 rounded-xl transition-all duration-200 border',
              isActive
                ? 'bg-white border-primary shadow-sm'
                : 'bg-transparent border-transparent hover:bg-white/50 hover:border-slate-200'
            )}
          >
            <span
              className={cn(
                'text-sm font-bold truncate',
                isActive ? 'text-primary' : 'text-slate-700'
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
)

export default ProjectList
