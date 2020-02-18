import React, { useCallback } from 'react'
import { pick } from 'ramda'

import { validate } from '../validators'

const withHandlers = Field => fieldProps => {
  const { value, updateState, onUpdate, validators } = fieldProps

  const props = {
    onChange: useCallback(
      event => {
        const targetValue = event.target.value
        const validationResult = validate(targetValue)

        const udpatedState = {
          ...fieldProps,
          value: targetValue,
          dirty: true,
          ...validationResult(validators)
        }

        updateState(udpatedState)

        const mappedProps = pick(
          [
            'value',
            'status',
            'valid',
            'invalid',
            'enabled',
            'disabled',
            'errors',
            'validators',
            'dirty',
            'input',
            'patchValue',
            'reset',
            'setValue'
          ],
          udpatedState
        )

        onUpdate({ ...mappedProps, event })
      },
      [value]
    ),
    patchValue: formData => updateState(formData),
    reset: () => updateState({}),
    setValue: () => {}
  }

  return <Field {...props} {...fieldProps} />
}

export default withHandlers
