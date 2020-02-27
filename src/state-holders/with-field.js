import React from 'react'

const withField = Field => fieldProps => {
  const { onStateChange } = fieldProps

  const handlers = {
    onChange: evt =>
      onStateChange({ ...fieldProps, value: evt.target.value || '' }),
    reset: () => onStateChange({ ...fieldProps, value: '' }),
    setValue: value => onStateChange({ ...fieldProps, value })
  }

  return <Field {...fieldProps} {...handlers} />
}

export default withField
