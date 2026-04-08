export const PROJECT_CATEGORIES = {
  RESTAURANT: 'restaurant',
  SPORTS: 'sports',
  EVENTS: 'events',
  AUTOMATION: 'automation',
  ADVERTISING: 'advertising'
} as const

export type ProjectCategory =
  (typeof PROJECT_CATEGORIES)[keyof typeof PROJECT_CATEGORIES]

export interface Project {
  id: string
  title: string
  image: string
  category: ProjectCategory
}
