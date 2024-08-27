import { useEffect } from 'react'
import { create } from 'zustand'
import {
  awards,
  clients,
  experiences,
  profiles,
  projects,
  projectsDetail,
} from '../services/data'

const useDataStore = create((set) => ({
  projects: [],
  projectsDetail: [],
  profiles: [],
  experiences: [],
  clients: [],
  awards: [],
  loadData: () => {
    set((state) => ({
      projects: projects,
      projectsDetail: projectsDetail,
      profiles: profiles,
      experiences: experiences,
      clients: clients,
      awards: awards,
    }))
  },
}))

const DataProvider = ({ children }) => {
  const loadData = useDataStore((state) => state.loadData)

  useEffect(() => {
    loadData()
  }, [])

  return <>{children}</>
}

export { DataProvider, useDataStore }
