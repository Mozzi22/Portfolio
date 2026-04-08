import {
  Balloon,
  Dumbbell,
  Layers,
  LucideIcon,
  Mail,
  Megaphone,
  Utensils
} from 'lucide-react'

import { Project, PROJECT_CATEGORIES, ProjectCategory } from '@/types/Project'

export const projectIcons: Record<ProjectCategory, LucideIcon> = {
  [PROJECT_CATEGORIES.RESTAURANT]: Utensils,
  [PROJECT_CATEGORIES.SPORTS]: Dumbbell,
  [PROJECT_CATEGORIES.EVENTS]: Balloon,
  [PROJECT_CATEGORIES.AUTOMATION]: Mail,
  [PROJECT_CATEGORIES.ADVERTISING]: Megaphone
}

export const projectTechStack: Record<Project['id'], string[]> = {
  '1': [
    'React',
    'Redux Toolkit',
    'TypeScript',
    'Stripe',
    'Chargebee',
    'Moyasar',
    'Apple Pay',
    'Google Maps API',
    'Places Autocomplete',
    'Formik -> React Hook Form',
    'Yup',
    'Bootstrap',
    'Sentry',
    'WebSockets',
    'React Beautiful DnD',
    '@react-oauth/google',
    'Lazy Load',
    'Image Crop',
    'QR Code',
    'i18next'
  ],
  '2': [
    'React',
    'Next.js',
    'TypeScript',
    'Stripe',
    'use-shopping-cart',
    'Axios',
    'SWR',
    'React Hook Form',
    'Yup',
    'MUI',
    'clsx',
    'apexcharts',
    'react-google-login',
    'Lodash',
    'uuid',
    'i18next'
  ],
  '3': [
    'React',
    'Redux Toolkit',
    'React Hook Form',
    'Yup',
    'Recharts',
    'qrcode.react',
    'Tailwind CSS',
    'Sass',
    'i18next'
  ],
  '4': ['React', 'Redux Toolkit', 'Formik', 'Yup', 'Bootstrap', 'i18next'],
  '5': [
    'React',
    'Redux Toolkit',
    'TypeScript',
    'Material UI',
    'React Hook Form',
    'Yup',
    'i18next'
  ],
  '6': [
    'React',
    'Redux Toolkit',
    'TypeScript',
    'Material UI',
    'React Hook Form',
    'Yup',
    'i18next'
  ],
  '7': [
    'React',
    'Redux Toolkit',
    'React Hook Form',
    'Yup',
    'Tailwind CSS',
    'React Hot Toast',
    'Day.js',
    'UUID',
    'i18next'
  ],
  '8': [
    'React',
    'Next.js',
    'TypeScript',
    'Redux Saga',
    'Reselect',
    'Material-UI',
    'Styled-components',
    'Axios',
    'Socket.IO',
    'i18next'
  ]
}

export const getProjectData = (
  id: Project['id'],
  category: ProjectCategory
): {
  techStack: string[]
  Icon: LucideIcon
} => {
  const techStack = projectTechStack[id] || []
  const Icon = projectIcons[category] || Layers

  return { techStack, Icon }
}
