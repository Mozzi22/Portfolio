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
                ? 'bg-background border-primary shadow-sm'
                : 'bg-transparent border-transparent hover:bg-background/50 hover:border-light'
            )}
          >
            <span
              className={cn(
                'text-sm font-bold ',
                isActive ? 'text-primary' : 'text-foreground/80'
              )}
            >
              {project.title}
            </span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              {project.category}
            </span>
          </Link>
        </li>
      )
    })}
  </ul>
)

export default ProjectList
