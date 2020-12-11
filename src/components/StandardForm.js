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
      {submitProps && <button {...submitProps} disabled={submitDisabled} />}
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

StandardForm.RadioGroup = ({
  className,
  label,
  name,
  id = name,
  inputs,
  required,
}) => (
  <li className={className}>
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
  </li>
)

const phoneReplacer = (match, p1, p2, p3) =>
  [p1, p2, p3].filter(v => v).join('-')

const Phone = props => {
  const patternMessage = 'Please use format ###-###-####'
  const [value, setValue] = useState('')

  const onChange = ({ target }) => {
    const newValue = target.value
      .replace(/\D/g, '')
      .replace(/(\d{0,3})(\d{0,3})(\d{0,4}).*/, phoneReplacer)
    setValue(newValue)
    target.setCustomValidity(
      /^([0-9]{3}-[0-9]{3}-[0-9]{4})?$/.test(newValue) ? '' : patternMessage
    )
  }

  return <input type="tel" {...{ value, onChange, ...props }} />
}

StandardForm.Phone = Phone

export default StandardForm
