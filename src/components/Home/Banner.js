import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import StFrancisRescue from '../../apis/StFrancisRescue'
import { PROTOCOL, HOSTNAME } from '../../config/StFrancisRescue'
import Scroller from '../Scroller'
import styles from './Banner.module.scss'

const cx = classNames.bind(styles)

const Banner = () => {
  const [bannerImages, setBannerImages] = useState([])

  useEffect(() => {
    const loadBannerImages = async () => {
      const bannerImageData = StFrancisRescue.getHeros()
      setBannerImages((await bannerImageData).data.heros)
    }
    loadBannerImages()
  }, [])

  return bannerImages.length ? (
    <div className={cx('banner')}>
      <Scroller
        components={bannerImages.map(({ id, image_src, url, name }) => ({
          key: id,
          component: (
            <a href={url}>
              <img src={`${PROTOCOL}://${HOSTNAME}${image_src}`} alt={name} />
            </a>
          ),
        }))}
        styles={styles}
        timer={5000}
        showCount={1}
      />
    </div>
  ) : null
}

export default Banner
