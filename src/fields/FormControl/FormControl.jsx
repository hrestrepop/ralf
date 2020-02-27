import React from 'react'
import PropTypes from 'prop-types'

const FormControl = ({ children, label }) => {
  return (
    <div className="field">
      {!!label && <label className="label">{label}</label>}
      {children}
    </div>
  )
}

FormControl.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  label: PropTypes.string
}

FormControl.defaultProps = {
  label: ''
}

export default FormControl
