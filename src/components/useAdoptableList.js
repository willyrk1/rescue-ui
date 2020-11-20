import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import * as qs from 'query-string'
import { usePetData } from '../context/GlobalDataContext'
import usePetSearch from '../hooks/usePetSearch'

const adoptablesPerPage = 50

export default (petType, lists) => {
  const location = useLocation()

  const petData = usePetData()
  const pets = petData && petData[petType]
  const petSearch = usePetSearch(petType, lists)

  const [processedLists, setProcessedLists] = useState()
  const [realPageNum, setRealPageNum] = useState()
  const [numPages, setNumPages] = useState()

  useEffect(() => {
    const {
      pageNum = 1,
      name: searchName,
      age: searchAge,
      ...searchSelects
    } = qs.parse(location.search)

    /*
     * If there are searches, then filter.
     */
    const processList = collection => {
      if (collection && petSearch) {
        const { min, max } =
          petSearch.age.choices.find(({ value }) => value === searchAge) || {}
        return collection.filter(({ name, date_of_birth, ...rest }) => {
          /*
           * Name (simple)
           */
          if (!name.toUpperCase().includes((searchName || '').toUpperCase())) {
            return false
          }

          /*
           * Age (range check)
           */
          if (min && new Date(date_of_birth) < min) {
            return false
          }
          if (max && new Date(date_of_birth) >= max) {
            return false
          }

          /*
           * All other criteria (use mappingFn)
           */
          if (
            Object.entries(petSearch).some(
              ([prop, { mappingFn }]) =>
                mappingFn &&
                searchSelects[prop] &&
                searchSelects[prop] !== mappingFn(rest)
            )
          )
            return false

          return true
        })
      } else {
        return []
      }
    }

    const filteredLists =
      pets &&
      lists.map(({ title, property }) => ({
        title,
        property,
        processedList: processList(pets[property]),
      }))

    const totalCount = filteredLists
      ? filteredLists.reduce(
          (count, { processedList }) => count + processedList.length,
          0
        )
      : 0

    const numPages = Math.floor(totalCount / adoptablesPerPage) + 1
    setNumPages(numPages)

    /*
     * A search may have made the current page number invalid so check that.
     */
    const realPageNum = Math.min(pageNum, numPages)
    setRealPageNum(realPageNum)

    const applyPaging = lists => {
      const startIndex = (realPageNum - 1) * adoptablesPerPage
      const endIndex = startIndex + adoptablesPerPage
      return lists.reduce(
        ({ index, lists }, { processedList, ...rest }) => {
          const newList = processedList.slice(
            Math.max(startIndex - index, 0),
            Math.max(endIndex - index, 0)
          )
          lists.push({ processedList: newList, ...rest })
          return {
            index: index + processedList.length,
            lists,
          }
        },
        {
          index: 0,
          lists: [],
        }
      ).lists
    }

    setProcessedLists(filteredLists && applyPaging(filteredLists))
  }, [lists, location.search, petData, petSearch, pets])

  return {
    processedLists,
    realPageNum,
    numPages,
    pets,
    error: petData && !petData[petType],
  }
}
