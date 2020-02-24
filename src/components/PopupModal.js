import React from 'react'
import classNames from 'classnames/bind'
import styles from './PopupModal.module.scss'

const cx = classNames.bind(styles)

const PopupModal = ({ className, close, children, ...rest }) =>
  <div className={cx(className, 'popup-modal')} {...rest} >
    <button className={cx('close')} onClick={close}>&times;</button>
    {children}
  </div>

PopupModal.Content = ({ className, ...rest }) =>
  <div className={cx(className, 'content')} {...rest} />

PopupModal.Actions = ({ className, ...rest }) =>
  <div className={cx(className, 'actions')} {...rest} />

PopupModal.ActionLink = ({ className, ...rest }) =>
  <a className={cx(className, 'btn')} {...rest} />

PopupModal.ActionButton = ({ className, ...rest }) =>
  <button className={cx(className, 'btn')} {...rest} />

PopupModal.CloseButton = ({ className, close, children = 'Close', ...rest }) =>
  <button
    type='button'
    className={cx(className, 'btn')}
    onClick={close}
  >
    {children}
  </button>

export default PopupModal;
