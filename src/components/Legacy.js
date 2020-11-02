import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import StFrancisRescue from '../apis/StFrancisRescue'
import { HOSTNAME, PROTOCOL } from '../config/StFrancisRescue'
import StandardLayout from './StandardLayout'
import styles from './Legacy.module.scss'
import Error from './Error'

const cx = classNames.bind(styles)

const Legacy = ({
  match: {
    params: { reference },
  },
}) => {
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
          content.replace(/\/uploads/g, `${PROTOCOL}://${HOSTNAME}/uploads`)
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
