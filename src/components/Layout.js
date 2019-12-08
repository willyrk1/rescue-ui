import React from 'react'
import classNames from 'classnames/bind'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.scss'

const cx = classNames.bind(styles)

const Layout = ({ children }) => 
  <div className="App">
    <Header />
    <div className={cx('content')}>{children}</div>
    <Footer />
  </div>

export default Layout