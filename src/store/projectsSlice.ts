import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from './index'

export interface Project {
  id: string
  title: string
  description: string
  // image: string
  category: 'restaurant' | 'sports' | 'wedding' | 'automation' // todo categories
  details: string
}

interface ProjectsState {
  items: Project[]
  loading: boolean
}

const initialState: ProjectsState = {
  items: [
    {
      id: '1',
      title: 'Gourmet Bistro',
      description: '',
      // image: '/projects/restaurant-1.png',
      category: 'restaurant',
      details: ''
    },
    {
      id: '2',
      title: 'Sushi Zen',
      description: '',
      // image: '/projects/restaurant-2.png',
      category: 'restaurant',
      details: ''
    },
    {
      id: '3',
      title: 'The Burger Joint',
      description: '',
      // image: '/projects/restaurant-3.png',
      category: 'restaurant',
      details: ''
    },
    {
      id: '4',
      title: 'Cafe Aurora',
      description: '',
      // image: '/projects/restaurant-4.png',
      category: 'restaurant',
      details: ''
    },
    {
      id: '5',
      title: 'SportLink',
      description: '',
      // image: '/projects/sports-1.png',
      category: 'sports',
      details: ''
    },
    {
      id: '6',
      title: 'Everlasting Vows',
      description: '',
      // image: '/projects/wedding-1.png',
      category: 'wedding',
      details: ''
    },
    {
      id: '7',
      title: 'MailConnect',
      description: '',
      // image: '/projects/automation-1.png',
      category: 'automation',
      details: ''
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

export default projectsSlice.reducer
