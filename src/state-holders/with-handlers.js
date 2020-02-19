import React, { useCallback } from 'react'
import { pick } from 'ramda'

import { validate } from './with-validators'

const getUserProps = pick([
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
])

const onChange = ({
  value,
  updateState,
  onUpdate,
  validators,
  ...fieldProps
}) => {
  return useCallback(
    event => {
      const value = event.target.value
      const validationResult = validate(value)

      const udpatedState = {
        ...fieldProps,
        value,
        validators,
        dirty: true,
        ...validationResult(validators)
      }

      updateState(udpatedState)

      onUpdate({ ...getUserProps(udpatedState), event })
    },
    [value]
  )
}

const withHandlers = Field => fieldProps => {
  const { updateState } = fieldProps

  const props = {
    onChange: onChange(fieldProps),
    patchValue: formData => updateState(formData),
    reset: () => updateState({}),
    setValue: () => {}
  }

  return <Field {...props} {...fieldProps} />
}

export default withHandlers
