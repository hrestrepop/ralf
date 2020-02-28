import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'ramda'

import { withFormControl, withTextField } from '../../state-holders'
import { ErrorList } from '../../wrappers'

import './TextAreaField.scss'

const TextAreaField = ({
  input: { className, ...input },
  onChange,
  errors,
  showErrors,
  showErrorList
}) => (
  <>
    <textarea
      autoComplete="off"
      className={`textarea ${className} ${showErrors ? 'is-danger' : ''}`}
      {...input}
      onChange={onChange}
    />
    {showErrorList && <ErrorList showErrors={showErrors} errors={errors} />}
  </>
)

TextAreaField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string
  }).isRequired,
  showErrorList: PropTypes.string
}

TextAreaField.defaultProps = {
  input: {
    className: ''
  },
  showErrorList: true
}

export default compose(withFormControl, withTextField)(TextAreaField)
