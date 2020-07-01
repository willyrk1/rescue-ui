import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react'
import classNames from 'classnames/bind'
import scrollerStyles from './Scroller.module.scss'

const Scroller = ({ components = [], styles, state, timer }) => {
  const cx = classNames.bind({ ...styles, ...scrollerStyles })

  /*
   * Scroll index (optionally shared).
   */
  const thisState = useState(0)
  const [scrollIndex, setScrollIndex] = state || thisState

  /*
   * Scroll size.
   */
  const [scrollSize, setScrollSize] = useState()

  const tileRef = useRef()

  const updateScrollSize = () => {
    if (tileRef.current) {
      setScrollSize(tileRef.current.offsetWidth)
    }
  }

  useLayoutEffect(() => {
    updateScrollSize()
  })

  const setScrollIndexAndSize = useCallback(scrollIndex => {
    setScrollIndex(scrollIndex)
    updateScrollSize()
  })

  /*
   * Timer for auto-scrolling.
   */
  const [cancelled, setCancelled] = useState(false)
  useEffect(() => {
    if (timer && !cancelled) {
      const interval = setInterval(() => {
        setScrollIndexAndSize(scrollIndex + 1)
      }, timer)

      return () => clearInterval(interval)
    }
  }, [scrollIndex, timer, cancelled, setScrollIndexAndSize])

  const setAndCancel = newIndex => () => {
    setScrollIndexAndSize(newIndex)
    setCancelled(true)
  }

  return (
    <>
      <div className={cx('scroller-arrow', 'scroller-arrow-left', 'arrow')}>
        <button onClick={setAndCancel(scrollIndex - 1)}>&lt;</button>
      </div>
      <div className={cx('scroller-tiles', 'tiles')}>
        {components.map(({ component, key }, index, ary) => {
          const adjustedIndex =
            ary.length > 1
              ? (((index - scrollIndex + 1) % ary.length) + ary.length) %
                ary.length
              : 1
          return (
            <div
              key={key}
              ref={tileRef}
              className={cx(
                (val => ({
                  'scroller-hide': val,
                  hide: val,
                }))(!adjustedIndex || adjustedIndex === ary.length - 1)
              )}
              style={{ left: `${(adjustedIndex - 1) * scrollSize}px` }}
            >
              {component}
            </div>
          )
        })}
      </div>
      <div className={cx('scroller-arrow', 'scroller-arrow-right', 'arrow')}>
        <button onClick={setAndCancel(scrollIndex + 1)}>&gt;</button>
      </div>
    </>
  )
}

export default Scroller
