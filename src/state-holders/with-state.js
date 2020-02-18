import React, { useState } from 'react'

const withState = Field => fieldProps => {
  const [props, updateState] = useState({
    value: '',
    status: 'VALID',
    valid: true,
    invalid: true,
    enabled: true,
    disabled: false,
    readOnly: false,
    errors: [],
    validators: [],
    dirty: false
  })

  const stateProps = {
    ...props,
    updateState
  }

  return <Field {...stateProps} {...fieldProps} />
}

export default withState
