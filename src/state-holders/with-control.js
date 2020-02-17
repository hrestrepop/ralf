import React from 'react'
import * as _ from 'ramda'

import withState from './with-state'
import withHandlers from './with-handlers'

const withMappedProps = Field => fieldProps => {
  const {
    value,
    status,
    valid,
    invalid,
    enabled,
    disabled,
    errors,
    validators,
    dirty,
    input,
    onUpdate,
    onChange,
    patchValue,
    reset,
    setValue
  } = fieldProps

  const mappedProps = {
    value,
    status,
    valid,
    invalid,
    enabled,
    disabled,
    errors,
    validators,
    dirty,
    input,
    onUpdate,
    onChange,
    patchValue,
    reset,
    setValue
  }

  return <Field {...mappedProps} />
}

export default _.compose(withState, withHandlers, withMappedProps)
