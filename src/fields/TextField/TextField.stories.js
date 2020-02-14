import React from 'react'
import TextField from './TextField'

export default { title: 'Text Field' }

export const withDefault = () => <TextField input={{ name: 'testField' }} />

export const withError = () => (
  <TextField
    input={{ name: 'testField' }}
    meta={{ showErrors: true, invalid: true }}
  />
)
