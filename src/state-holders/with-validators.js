import React from 'react'

import { validate } from '../validators'

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
