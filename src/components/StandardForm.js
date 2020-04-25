import React from 'react';
import classNames from 'classnames/bind'
import ReactSelect from 'react-select'
import styles from './StandardForm.module.scss'
import StFrancisRescue from '../apis/StFrancisRescue';

const cx = classNames.bind(styles)

const StandardForm = ({
  className,
  method = 'post',
  onSubmit = StFrancisRescue.postForm,
  ...rest
}) =>
  <form
    className={cx(className, 'form')}
    method={method}
    onSubmit={onSubmit}
    {...rest}
  />

StandardForm.Input = ({ className, ...rest }) =>
  <div className={cx(className, 'input')} {...rest} />

StandardForm.Select = ({ className, ...rest }) =>
  <ReactSelect className={cx(className, 'input-select')} {...rest} />

StandardForm.RadioGroup = ({ className, label, name, id = name, inputs }) =>
  <li className={className}>
    <label htmlFor={id}>{label}</label>
    <StandardForm.Input>
      {inputs.map(({ label: inputLabel, id: inputId = inputLabel, value }) =>
        <label htmlFor={`${id}${inputId}`}>
          <input type='radio' id={`${id}${inputId}`} name={name} value={value} />
          {inputLabel}
        </label>
      )}
    </StandardForm.Input>
  </li>

export default StandardForm
