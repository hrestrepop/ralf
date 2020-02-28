import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'ramda'

import { withFormControl, withCheckField } from '../../state-holders'

const styleId = {
  checkbox: 'checkbox',
  radio: 'radio'
}

const CheckField = ({
  input: { className, checked, ...input },
  label,
  onChange,
  errors,
  showErrors
}) => {
  return (
    <>
      <label
        className={`${styleId[input.type]} ${className || ''} ${
          showErrors ? 'is-danger' : ''
        }`}
      >
        <input
          className={`${styleId[input.type]}`}
          id={`${input.name}__${input.value}`}
          htmlFor={`${input.name}_${input.value}`}
          {...input}
          onChange={onChange}
        />{' '}
        {label}
      </label>
      {showErrors &&
        errors.map((error, key) => (
          <p className="help is-danger is-block" key={key}>
            {error}
          </p>
        ))}
    </>
  )
}

CheckField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['checkbox', 'radio']).isRequired
  }).isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

CheckField.defaultProps = {
  input: {},
  label: ''
}

export default compose(withFormControl, withCheckField)(CheckField)
