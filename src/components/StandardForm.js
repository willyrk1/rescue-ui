import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import classNames from 'classnames/bind'
import ReactSelect from 'react-select'
import styles from './StandardForm.module.scss'
import StFrancisRescue from '../apis/StFrancisRescue'

const cx = classNames.bind(styles)

const StandardForm = ({
  className,
  method = 'post',
  onSubmit,
  nextPage = '/form-submitted',
  submitProps,
  children,
  ...rest
}) => {
  const history = useHistory()
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const doPost = async (nextPage, ...params) => {
    try {
      setSubmitDisabled(true)
      await StFrancisRescue.postForm(...params)
      history.push(nextPage)
    } catch {
      history.push('/error')
    }
  }

  return (
    <form
      className={cx(className, 'form')}
      method={method}
      onSubmit={(...params) => doPost(nextPage, ...params)}
      {...rest}
    >
      {children}
      {submitProps && (
        <button
          {...{
            ...submitProps,
            className: cx('submit', submitProps.className),
          }}
          disabled={submitDisabled}
        />
      )}
    </form>
  )
}

StandardForm.Input = ({ className, ...rest }) => (
  <div className={cx(className, 'input')} {...rest} />
)

const RequiredSelect = ({ className, onChange, value, ...rest }) => {
  const [hiddenValue, setHiddenValue] = useState(value || '')
  const selectRef = useRef()

  const handleChange = newValue => {
    onChange && onChange(newValue)
    setHiddenValue(newValue)
  }

  return (
    <div className={cx(className, 'input-select', 'required-select')}>
      <ReactSelect
        value={value}
        onChange={handleChange}
        {...rest}
        ref={selectRef}
      />
      <input
        tabIndex={-1}
        autoComplete="off"
        className={cx('required-input')}
        value={hiddenValue}
        onChange={() => {}}
        onFocus={() => selectRef.current.focus()}
        required
      />
    </div>
  )
}

StandardForm.Select = ({ className, required, ...rest }) =>
  required ? (
    <RequiredSelect className={className} {...rest} />
  ) : (
    <ReactSelect className={cx(className, 'input-select')} {...rest} />
  )

StandardForm.RadioGroup = ({ label, name, id = name, inputs, required }) => (
  <>
    <label htmlFor={id}>{label}</label>
    <StandardForm.Input>
      {inputs.map(({ label: inputLabel, id: inputId = inputLabel, value }) => (
        <label key={inputId} htmlFor={`${id}${inputId}`}>
          <input
            type="radio"
            id={`${id}${inputId}`}
            {...{ name, value, required }}
          />
          {inputLabel}
        </label>
      ))}
    </StandardForm.Input>
  </>
)

StandardForm.Phone = props => (
  <div className={cx('phone')}>
    <input type="tel" {...props} pattern="[0-9]{10}" />
    <span>Format: ##########</span>
  </div>
)

StandardForm.FullWidth = ({ className, ...props }) => (
  <div className={cx('full-width', className)} {...props} />
)

export default StandardForm
