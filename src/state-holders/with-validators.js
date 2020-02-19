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

const withValidators = Field => ({ value, validators, ...fieldProps }) => {
  const validationResult = validate(value)

  const props = {
    value,
    validators,
    ...fieldProps,
    ...validationResult(validators)
  }

  return <Field {...props} />
}

export default withValidators
