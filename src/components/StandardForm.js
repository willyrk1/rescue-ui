import React from 'react';
import classNames from 'classnames/bind'
import ReactSelect from 'react-select'
import styles from './StandardForm.module.scss'

const cx = classNames.bind(styles)

const StandardForm = ({ className, ...rest }) =>
  <form className={cx(className, 'form')} {...rest} />

const Input = ({ className, ...rest }) =>
  <div className={cx(className, 'input')} {...rest} />

const Select = ({ className, ...rest }) =>
  <ReactSelect className={cx(className, 'input-select')} {...rest} />

StandardForm.Input = Input
StandardForm.Select = Select

export default StandardForm
