import React from 'react'
import PropTypes from 'prop-types'

import { withFormControl } from '../../state-holders'

import './TextField.scss'

const TextField = props => {
  console.log('props', props)
  const {
    invalid,
    onChange,
    input: { className, ...input }
  } = props

  return (
    <>
      <input
        className={`input ${invalid ? 'is-danger' : ''} ${className}`}
        {...input}
        onChange={onChange}
      />
      {invalid && <p className="help is-danger">This email is invalid</p>}
    </>
  )
}

TextField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string
  }).isRequired
}

TextField.defaultProps = {
  input: {
    className: ''
  }
}

export default withFormControl(TextField)
