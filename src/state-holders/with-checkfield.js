import React, { useState } from 'react'

const withCheckField = Field => fieldProps => {
  const {
    value,
    input: { checked },
    onStateChange
  } = fieldProps

  const [props, updateState] = useState({
    isChecked: checked || false
  })

  const checkFieldProps = {
    ...props,
    onChange: evt => {
      updateState({ isChecked: evt.target.checked })
      onStateChange({
        ...fieldProps,
        value: evt.target.value || 'on',
        isChecked: evt.target.checked
      })
    },
    setValue: value => onStateChange({ ...fieldProps, value })
  }

  return <Field {...fieldProps} {...checkFieldProps} value={value || 'on'} />
}

export default withCheckField
