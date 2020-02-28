import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'ramda'

import { withFormControl, withTextField } from '../../state-holders'
import { ErrorList } from '../../wrappers'

import './TextField.scss'

const TextField = ({
  input: { className, ...input },
  onChange,
  showErrors,
  errors,
  value,
  showErrorList
}) => {
  return (
    <>
      <input
        autoComplete="off"
        className={`input ${className} ${showErrors ? 'is-danger' : ''}`}
        {...input}
        value={value}
        onChange={onChange}
      />
      {showErrorList && <ErrorList showErrors={showErrors} errors={errors} />}
    </>
  )
}

TextField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'password', 'email', 'tel']),
    className: PropTypes.string,
    placeholder: PropTypes.string
  }).isRequired,
  handleOnChange: PropTypes.func,
  showErrorList: PropTypes.bool
}

TextField.defaultProps = {
  input: {
    type: 'text',
    className: ''
  },
  showErrorList: false
}

export default compose(withFormControl, withTextField)(TextField)
