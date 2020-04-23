import React, { useContext, useState, useEffect } from "react"
import StFrancisRescue from '../apis/StFrancisRescue'

const PetDataContext = React.createContext()

export const PetDataProvider = ({ children }) => {
  const [petData, setPetData] = useState()

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
    loadPetData()
  }, [])

  return (
    <PetDataContext.Provider value={petData}>{children}</PetDataContext.Provider>
  )
}

export const usePetData = () => useContext(PetDataContext)