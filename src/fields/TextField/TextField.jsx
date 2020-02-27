import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'ramda'

import { withFormControl, withTextField } from '../../state-holders'
// import { Control } from '../../wrappers'

import './TextField.scss'

const TextField = props => {
  // console.log('TextField', props)
  const {
    onChange,
    showErrors,
    value,
    input: { className, ...input }
  } = props

  return (
    <input
      autoComplete="off"
      className={`input ${className} ${showErrors ? 'is-danger' : ''}`}
      {...input}
      value={value}
      onChange={onChange}
    />
  )
}

TextField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'password', 'email', 'tel']),
    className: PropTypes.string,
    placeholder: PropTypes.string
  }).isRequired,
  handleOnChange: PropTypes.func.isRequired
}

TextField.defaultProps = {
  input: {
    type: 'text',
    className: ''
  }
}

export default compose(withFormControl, withTextField)(TextField)
