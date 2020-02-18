import React from 'react'
import PropTypes from 'prop-types'

const FormControl = ({ children, label, isLoading }) => {
  return (
    <div className="field">
      {!!label && <label className="label">{label}</label>}
      <div className={`control  ${isLoading ? 'is-loading' : ''}`}>
        {children}
      </div>
    </div>
  )
}

FormControl.propTypes = {
  children: PropTypes.element,
  label: PropTypes.string,
  isLoading: PropTypes.bool
}

FormControl.defaultProps = {
  label: '',
  isLoading: false
}

export default FormControl
