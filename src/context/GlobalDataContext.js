import React, { useContext, useState, useEffect } from 'react'
import StFrancisRescue from '../apis/StFrancisRescue'

const GlobalDataContext = React.createContext()

const byHostsOvernight = (a, b) => {
  if (a.hosts_animals_overnight && !b.hosts_animals_overnight) return -1
  if (b.hosts_animals_overnight && !a.hosts_animals_overnight) return 1
  return 0
}

export const GlobalDataProvider = ({ children }) => {
  const [petData, setPetData] = useState()
  const [locations, setLocations] = useState()

  useEffect(() => {
    // Ignore for now...
    const handleError = async result => result.catch(() => ({}))

    const loadPetData = async () => {
      const cats = StFrancisRescue.getCats()
      const courtesyCats = StFrancisRescue.getCourtesyCats()
      const dogs = StFrancisRescue.getDogs()
      setPetData({
        cats: (await handleError(cats)).data,
        dogs: (await handleError(dogs)).data,
        courtesyCats: (await handleError(courtesyCats)).data,
      })
    }

    const loadLocations = async () => {
      const { data } = await StFrancisRescue.getLocations()
      setLocations(data.locations.sort(byHostsOvernight))
    }

    loadPetData()
    loadLocations()
  }, [])

  return (
    <GlobalDataContext.Provider value={{ petData, locations }}>
      {children}
    </GlobalDataContext.Provider>
  )
}

export const usePetData = () => useContext(GlobalDataContext).petData
export const useLocations = () => useContext(GlobalDataContext).locations
