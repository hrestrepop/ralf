import React from 'react'
import PropTypes from 'prop-types'

import { withFormControl } from '../../state-holders'
import './TextAreaField.scss'

const TextAreaField = ({
  onChange,
  errors,
  showErrors,
  input: { className, ...input }
}) => (
  <>
    <textarea
      autoComplete="off"
      className={`textarea ${className} ${showErrors ? 'is-danger' : ''}`}
      {...input}
      onChange={onChange}
    />
    {showErrors &&
      errors.map((error, key) => (
        <p className="help is-danger is-block" key={key}>
          {error}
        </p>
      ))}
  </>
)

TextAreaField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    readOnly: PropTypes.bool
  }).isRequired
}

TextAreaField.defaultProps = {
  input: {
    className: '',
    required: false,
    readOnly: true
  }
}

export default withFormControl(TextAreaField)
