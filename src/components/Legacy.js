import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind'
import StFrancisRescue from '../apis/StFrancisRescue'
import { URI } from '../config/StFrancisRescue'
import StandardLayout from './StandardLayout'
import styles from './Legacy.module.scss'
import Error from './Error'

const cx = classNames.bind(styles)

const Legacy = () => {
  const { reference } = useParams();
  const [legacyContent, setLegacyContent] = useState()
  const [isError, setIsError] = useState()

  useEffect(() => {
    // Ignore for now...
    const loadLegacyPage = async () => {
      try {
        const {
          data: {
            page: { content },
          },
        } = await StFrancisRescue.getPage(reference)
        setLegacyContent(
          content.replace(/\/uploads/g, `${URI}/uploads`)
        )
      } catch {
        setIsError(true)
      }
    }

    loadLegacyPage()
  }, [reference])

  return (
    <StandardLayout>
      {isError ? (
        <Error />
      ) : (
        <div
          dangerouslySetInnerHTML={{ __html: legacyContent }}
          className={cx('content')}
        />
      )}
    </StandardLayout>
  )
}

export default Legacy
