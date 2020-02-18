import React from 'react'
import * as _ from 'ramda'

import withState from './with-state'
import withHandlers from './with-handlers'
import withValidators from './with-validators'

const withMappedProps = Field => fieldProps => {
  const mappedProps = _.pick(
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
      'onUpdate',
      'onChange',
      'patchValue',
      'reset',
      'setValue'
    ],
    fieldProps
  )

  return <Field {...mappedProps} />
}

export default _.compose(
  withState,
  withHandlers,
  withValidators,
  withMappedProps
)
