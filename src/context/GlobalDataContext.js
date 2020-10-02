import React, { useContext, useState, useEffect } from 'react'
import StFrancisRescue from '../apis/StFrancisRescue'

const GlobalDataContext = React.createContext()

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
      setLocations(data.locations)
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
