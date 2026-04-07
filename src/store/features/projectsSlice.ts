import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../index'

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

interface ProjectsState {
  items: Project[]
  loading: boolean
}

const initialState: ProjectsState = {
  items: [
    {
      id: '1',
      title: 'OrderPro',
      image: '/projects/restaurant-1.png',
      category: 'restaurant'
    },
    {
      id: '2',
      title: 'UrbanGrill',
      image: '/projects/restaurant-2.png',
      category: 'restaurant'
    },
    {
      id: '3',
      title: 'SunBite',
      image: '/projects/restaurant-3.png',
      category: 'restaurant'
    },
    {
      id: '4',
      title: 'TasteAtlas',
      image: '/projects/restaurant-4.png',
      category: 'restaurant'
    },
    {
      id: '5',
      title: 'SportSpot',
      image: '/projects/sports-1.png',
      category: 'sports'
    },
    {
      id: '6',
      title: 'EventSpace',
      image: '/projects/wedding-1.png',
      category: 'events'
    },
    {
      id: '7',
      title: 'MailCraft',
      image: '/projects/automation-1.png',
      category: 'automation'
    },
    {
      id: '8',
      title: 'NextAd',
      image: '/projects/ad-1.png',
      category: 'advertising'
    }
  ],
  loading: false
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.items = action.payload
    }
  }
})

export const { setProjects } = projectsSlice.actions

export const selectProjects = (state: RootState) => state.projects.items
export const selectProjectsLoading = (state: RootState) =>
  state.projects.loading

export const selectProjectById = (id: string | undefined) =>
  createSelector(
    (state: RootState) => state.projects.items,
    (items) => items.find((p) => p.id === id)
  )

export default projectsSlice.reducer
