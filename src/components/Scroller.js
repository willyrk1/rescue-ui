import React, { useState, useEffect, useRef, useCallback } from 'react'
import classNames from 'classnames/bind'
import scrollerStyles from './Scroller.module.scss'

const dupeUntil = (components, untilCount) => {
  if (components.length) {
    const finalComponents = [...components]
    let index = 1
    while (finalComponents.length < untilCount) {
      finalComponents.push(
        ...components.map(({ key, ...rest }) => ({
          key: `${key}_DUPE${index}`,
          ...rest,
        }))
      )
      index++
    }
    return finalComponents
  }
  // Huh?
  else return components
}

const Scroller = ({
  components: originalComponents = [],
  styles,
  state,
  timer,
  showCount,
}) => {
  const cx = classNames.bind({ ...styles, ...scrollerStyles })

  /*
   * Check if there are enough items to even scroll through.
   */
  const canScroll = !showCount || originalComponents.length > showCount

  /*
   * If we can scroll and know how many items, make sure there are enough to hide
   * the first and last. If not, just duplicate them to keep the scrolling on point.
   */
  const components =
    canScroll && showCount
      ? dupeUntil(originalComponents, showCount + 2)
      : originalComponents

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

  useEffect(() => {
    const checkSizes = () => {
      updateScrollSize()
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
  const getAdjustedIndex = index =>
    (((index - scrollIndex + 1) % components.length) + components.length) %
    components.length

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
      <div className={cx('scroller-tiles', 'tiles')}>
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
