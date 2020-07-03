import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import classNames from 'classnames/bind'
import ReactSelect from 'react-select'
import styles from './StandardForm.module.scss'
import StFrancisRescue from '../apis/StFrancisRescue'

const cx = classNames.bind(styles)

const doPost = ({ history, nextPage }) => async (...params) => {
  await StFrancisRescue.postForm(...params)
  history.push(nextPage)
}

const StandardForm = ({
  className,
  method = 'post',
  onSubmit = doPost,
  nextPage = '/form-submitted',
  ...rest
}) => {
  const history = useHistory()
  return (
    <form
      className={cx(className, 'form')}
      method={method}
      onSubmit={onSubmit({ history, nextPage })}
      {...rest}
    />
  )
}

StandardForm.Input = ({ className, ...rest }) => (
  <div className={cx(className, 'input')} {...rest} />
)

const RequiredSelect = ({ className, onChange, value, ...rest }) => {
  const [hiddenValue, setHiddenValue] = useState(value)
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
        <label htmlFor={`${id}${inputId}`}>
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

export default StandardForm
