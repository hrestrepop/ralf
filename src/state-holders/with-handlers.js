import React, { useCallback } from 'react'

const withHandlers = Field => fieldProps => {
  const { value, updateState, onUpdate } = fieldProps

  const props = {
    onChange: useCallback(
      evt => {
        const targetValue = evt.target.value

        updateState({
          ...fieldProps,
          value: targetValue
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
