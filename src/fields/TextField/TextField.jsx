import React from 'react'
import PropTypes from 'prop-types'

import './TextField.scss'

const TextField = ({ input, meta, className }) => {
  return (
    <input
      className={`input ${
        meta.showErrors && meta.invalid ? 'is-danger' : ''
      } ${className}`}
      {...input}
    />
  )
}

TextField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  meta: PropTypes.shape({}),
  className: PropTypes.string
}

TextField.defaultProps = {
  meta: {},
  className: ''
}

export default TextField
