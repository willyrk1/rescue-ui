import React, { useContext, useState, useEffect } from "react"
import StFrancisRescue from '../apis/StFrancisRescue'

const PetDataContext = React.createContext()

export const PetDataProvider = ({ children }) => {
  const [petData, setPetData] = useState()

  useEffect(() => {
    const loadPetData = async () => {
      const cats = StFrancisRescue.getCats()
      const dogs = StFrancisRescue.getDogs()
      setPetData({
        cats: (await cats).data,
        dogs: (await dogs).data,
      })
    }
    loadPetData()
  }, [])

  return (
    <PetDataContext.Provider value={petData}>{children}</PetDataContext.Provider>
  )
}

export const usePetData = () => useContext(PetDataContext)