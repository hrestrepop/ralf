import React from 'react'
import PropTypes from 'prop-types'

const FormControl = ({ children, label }) => {
  return (
    <div className="field">
      {!!label && <label className="label">{label}</label>}
      <div className="control">{children}</div>
    </div>
  )
}

FormControl.propTypes = {
  label: PropTypes.string,
  children: PropTypes.element
}

FormControl.defaultProps = {
  label: ''
}

export default FormControl
