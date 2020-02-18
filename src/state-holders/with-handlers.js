import React, { useCallback } from 'react'

import { validate } from '../validators'

const withHandlers = Field => fieldProps => {
  const { value, updateState, onUpdate, validators } = fieldProps

  const props = {
    onChange: useCallback(
      evt => {
        const targetValue = evt.target.value
        const validationResult = validate(targetValue)

        updateState({
          ...fieldProps,
          value: targetValue,
          ...validationResult(validators)
        })

        onUpdate({ value: targetValue, evt })
      },
      [value]
    ),
    patchValue: () => {},
    reset: () => {},
    setValue: () => {}
  }

  return <Field {...props} {...fieldProps} />
}

export default withHandlers
