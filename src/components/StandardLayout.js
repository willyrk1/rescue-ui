import React from 'react'
import classNames from 'classnames/bind'
import Layout from './Layout'
import styles from './StandardLayout.module.scss'

const cx = classNames.bind(styles)

const StandardLayout = ({ children, ...rest }) =>
  <Layout {...rest}>
    <div className={cx('standard')}>
      {children}
    </div>
  </Layout>

export default StandardLayout