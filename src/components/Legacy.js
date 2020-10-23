import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import StFrancisRescue from '../apis/StFrancisRescue'
import { HOSTNAME, PROTOCOL } from '../config/StFrancisRescue'
import StandardLayout from './StandardLayout'
import styles from './Legacy.module.scss'

const cx = classNames.bind(styles)

const Legacy = ({
  match: {
    params: { reference },
  },
}) => {
  const [legacyContent, setLegacyContent] = useState()

  useEffect(() => {
    // Ignore for now...
    const handleError = async result => result.catch(() => ({}))

    const loadLegacyPage = async () => {
      const {
        data: {
          page: { content },
        },
      } = await handleError(StFrancisRescue.getPage(reference))
      setLegacyContent(
        content.replace(/\/uploads/g, `${PROTOCOL}://${HOSTNAME}/uploads`)
      )
    }

    loadLegacyPage()
  }, [reference])

  return (
    <StandardLayout>
      <div
        dangerouslySetInnerHTML={{ __html: legacyContent }}
        className={cx('content')}
      />
    </StandardLayout>
  )
}

export default Legacy
