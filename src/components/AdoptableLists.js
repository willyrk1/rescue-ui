import React, { useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import * as qs from 'query-string'
import classNames from 'classnames/bind'
import StandardLayout from './StandardLayout'
import Error from './Error'
import AnimalCard from './AnimalCard'
import AnimalSearch from './AnimalSearch'
import styles from './AdoptableLists.module.scss'
import useAdoptableList from './useAdoptableList'

const cx = classNames.bind(styles)

const AdoptableList = ({ children, ...rest }) => {
  const { petType, lists } = rest
  const location = useLocation()
  const history = useHistory()
  const { pageNum = 1, s: scrollParam, ...restQueryParams } = qs.parse(
    location.search
  )

  const adoptableList = useAdoptableList(petType, lists)

  const { pets, processedLists, realPageNum, numPages, error } = adoptableList

  /*
   * When hitting back from the AnimalDetails, Chrome leaves the user in the middle of nowhere.
   * To fix that, this page now adds a scroll query string param when linking to AnimalDetails and,
   * in this effect, we detect when the page is done loading and reset the scroll back to where
   * it was when we left.
   */
  useEffect(() => {
    let maxSize = 0
    const intervalId =
      scrollParam &&
      setInterval(() => {
        if (document.documentElement.scrollHeight > maxSize) {
          maxSize = document.documentElement.scrollHeight
        } else if (document.documentElement.scrollHeight > scrollParam) {
          window.scrollTo(0, scrollParam)
          history.replace({
            ...location,
            search: qs.stringify({
              pageNum,
              ...restQueryParams,
            }),
          })
          clearInterval(intervalId)
        }
      }, 1000)

    return () => clearInterval(intervalId)
  }, [history, location, pageNum, restQueryParams, scrollParam])

  const PageLink = ({ pageNum, ...rest }) => (
    <Link
      to={location => ({
        ...location,
        search: qs.stringify({ ...restQueryParams, pageNum }),
      })}
      {...rest}
    />
  )

  return (
    <StandardLayout>
      {error ? (
        <Error />
      ) : (
        <>
          {typeof children === 'function' ? children(pets) : children}

          {processedLists &&
          processedLists.some(({ processedList }) => processedList.length) ? (
            processedLists.map(
              ({ title, processedList, property }) =>
                !!processedList.length && (
                  <div className={cx('adoptable-list')} key={title}>
                    <div className={cx('search')}>
                      <AnimalSearch {...adoptableList} {...rest} />
                    </div>
                    <h2>{title}</h2>
                    <div>
                      {processedList.map(pet => (
                        <AnimalCard
                          petType={petType}
                          pet={pet}
                          list={property}
                          key={pet.id}
                        />
                      ))}
                    </div>
                  </div>
                )
            )
          ) : (
            <div className={cx('search')}>
              <AnimalSearch {...adoptableList} {...rest} />
            </div>
          )}
          {+numPages > 1 && (
            <div className={cx('pages')}>
              {realPageNum > 1 && (
                <PageLink pageNum={realPageNum - 1}>&lt;&lt;</PageLink>
              )}
              {[...Array(numPages)]
                .map((x, index) => index + 1)
                .map(pageNum => (
                  <PageLink
                    pageNum={pageNum}
                    key={pageNum}
                    className={cx({ current: realPageNum === pageNum })}
                  >
                    {pageNum}
                  </PageLink>
                ))}
              {realPageNum < numPages && (
                <PageLink pageNum={realPageNum + 1}>&gt;&gt;</PageLink>
              )}
            </div>
          )}
        </>
      )}
    </StandardLayout>
  )
}

export default AdoptableList
