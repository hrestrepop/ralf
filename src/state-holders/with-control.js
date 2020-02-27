import React, { useState, useCallback } from 'react'

const validate = value => {
  return validators => {
    const errors = validators
      .map(validator => validator(value))
      .filter(result => !!result)

    return {
      errors,
      invalid: !!errors.length,
      valid: !errors.length
    }
  }
}

const updateValidations = fieldProps => {
  const { value, validators, dirty } = fieldProps
  const validationResult = validate(value)
  const { valid, invalid, errors } = validationResult(validators)
  const showErrors = (invalid || !valid) && errors.length > 0 && dirty

  return {
    ...fieldProps,
    dirty: true,
    showErrors,
    valid,
    invalid,
    errors
  }
}

const withControl = Field => fieldProps => {
  const { value, input, handleOnChange } = fieldProps
  const inputValue = input.value || ''
  const isDirty = typeof inputValue === 'string' && inputValue.length > 0

  const [props, updateState] = useState({
    value: inputValue,
    status: 'VALID',
    valid: true,
    invalid: false,
    disabled: false,
    dirty: isDirty,
    loading: false,
    showErrors: false,
    validators: [],
    errors: []
  })

  const currentState = {
    ...updateValidations({ ...props, ...fieldProps }),
    onStateChange: useCallback(
      props => {
        const updatedState = updateValidations(props)

        updateState(updatedState)

        if (handleOnChange && typeof handleOnChange === 'function') {
          handleOnChange(updatedState)
        }
      },
      [value]
    )
  }

  return <Field {...currentState} />
}

export default withControl
