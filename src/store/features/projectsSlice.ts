import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/store'
import { Project } from '@/types/Project'

interface ProjectsState {
  items: Project[]
  loading: boolean
}

const initialState: ProjectsState = {
  items: [
    {
      id: '1',
      title: 'Restaurant Management Platform — Client A',
      image: '/projects/restaurant-1.png',
      category: 'restaurant'
    },
    {
      id: '2',
      title: 'Restaurant Management Platform — Client B',
      image: '/projects/restaurant-2.png',
      category: 'restaurant'
    },
    {
      id: '3',
      title: 'Restaurant Management Platform — Client C',
      image: '/projects/restaurant-3.png',
      category: 'restaurant'
    },
    {
      id: '4',
      title: 'Restaurant Management Platform — Client D',
      image: '/projects/restaurant-4.png',
      category: 'restaurant'
    },
    {
      id: '5',
      title: 'Sports Booking Platform',
      image: '/projects/sports-1.png',
      category: 'sports'
    },
    {
      id: '6',
      title: 'Events Booking Platform',
      image: '/projects/wedding-1.png',
      category: 'events'
    },
    {
      id: '7',
      title: 'Email Marketing Platform',
      image: '/projects/automation-1.png',
      category: 'automation'
    },
    {
      id: '8',
      title: 'Advertising Management Platform',
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
