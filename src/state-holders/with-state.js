import React, { useState } from 'react'

const withState = Field => fieldProps => {
  const [props, setProps] = useState({
    value: '',
    status: null,
    valid: true,
    invalid: true,
    enabled: true,
    disabled: true,
    errors: [],
    validators: [],
    dirty: false
  })

  const stateProps = {
    ...props,
    updateState: setProps
  }

  return <Field {...stateProps} {...fieldProps} />
}

export default withState
