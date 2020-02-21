import React from 'react'

export const validate = value => {
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

const withValidators = Field => fieldProps => {
  const { value, dirty, valid, invalid, validators, errors } = fieldProps
  const validationResult = validate(value)
  const showErrors = (invalid || !valid) && errors.length > 0 && dirty

  const props = {
    ...fieldProps,
    ...validationResult(validators),
    showErrors
  }

  return <Field {...props} />
}

export default withValidators
