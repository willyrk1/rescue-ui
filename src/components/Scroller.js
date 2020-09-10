import React, { useState, useEffect, useRef, useCallback } from 'react'
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

  /*
   * Check if there are enough items to even scroll through.
   */
  const [canScroll, setCanScroll] = useState(true)
  const tilesRef = useRef()

  useEffect(() => {
    const checkSizes = () => {
      updateScrollSize()

      if (tilesRef.current && tilesRef.current.children.length) {
        const parentWidth = tilesRef.current.offsetWidth
        const childWidths = Array.from(tilesRef.current.children)
          .map(node => node.offsetWidth)
          .reduce((acc, curr) => acc + curr)
        setCanScroll(parentWidth < childWidths)
      }
    }

    checkSizes()

    window.addEventListener('resize', checkSizes)

    return () => window.removeEventListener('resize', checkSizes)
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

  /*
   * Get adjusted component index by applying the current scroll index modulo the
   * number of components (the weird code below is a work-around for how Javascript
   * does modulo with negative numbers).  For case of just one item, just return one.
   */
  const getAdjustedIndex = index => {
    if (components.length <= 1) return 1

    return (
      (((index - scrollIndex + 1) % components.length) + components.length) %
      components.length
    )
  }

  /*
   * Determine if the item should be hidden based on the adjusted index.
   */
  const isHidden = adjustedIndex => {
    if (!canScroll) return false
    return !adjustedIndex || adjustedIndex === components.length - 1
  }

  return (
    <>
      {canScroll && (
        <div
          className={cx(
            'scroller-arrow',
            'scroller-arrow-left',
            'arrow',
            'arrow-left'
          )}
        >
          <button onClick={setAndCancel(scrollIndex - 1)}>&lt;</button>
        </div>
      )}
      <div className={cx('scroller-tiles', 'tiles')} ref={tilesRef}>
        {components.map(({ component, key }, index) => {
          const adjustedIndex = getAdjustedIndex(index)
          const hide = isHidden(adjustedIndex)
          return (
            <div
              key={key}
              ref={tileRef}
              className={cx({ hide, 'scroller-hide': hide })}
              style={{ left: `${(adjustedIndex - canScroll) * scrollSize}px` }}
            >
              {component}
            </div>
          )
        })}
      </div>
      {canScroll && (
        <div
          className={cx(
            'scroller-arrow',
            'scroller-arrow-right',
            'arrow',
            'arrow-right'
          )}
        >
          <button onClick={setAndCancel(scrollIndex + 1)}>&gt;</button>
        </div>
      )}
    </>
  )
}

export default Scroller
