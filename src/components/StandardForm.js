import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
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
  excludeList,
  ...rest
}) => {
  const navigate = useNavigate()
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const doPost = async event => {
    try {
      setSubmitDisabled(true)
      await StFrancisRescue.postForm(event, excludeList)
      navigate(nextPage)
    } catch(error) {
      navigate('/error', { state: error })
    }
  }

  const onClick = event => {
    submitProps.onClick && submitProps.onClick()

    /*
     * Check all tel input formats.
     */
    const tels = event.target.form.querySelectorAll('input[type="tel"]')
    ;[...tels].forEach(tel => {
      tel.setCustomValidity(
        !tel.value ||
          /^[2-9][0-9]{2}[-.]?[0-9]{3}[-.]?[0-9]{4}$/.test(tel.value)
          ? ''
          : 'Please enter 10 digits for the phone number (not starting with a 0 or 1)'
      )
    })
  }

  return (
    <form
      className={cx(className, 'form')}
      method={method}
      onSubmit={event => doPost(event)}
      {...rest}
    >
      {children}
      {submitProps && (
        <button
          {...{
            ...submitProps,
            onClick,
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
  <input type="tel" {...props} placeholder="##########" />
)

StandardForm.FullWidth = ({ className, ...props }) => (
  <div className={cx('full-width', className)} {...props} />
)

export default StandardForm
