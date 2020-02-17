import React from 'react'

import Section from '../../components/Section'
import TextField from './TextField'
import FormControl from '../FormControl'

export default { title: 'Text Field' }

export const withDefault = () => (
  <Section title="Basic TextField">
    <FormControl label="Name:">
      <TextField input={{ name: 'testField' }} />
    </FormControl>
  </Section>
)

export const withError = () => (
  <Section title="TextField with validations">
    <FormControl label="Name:">
      <TextField
        input={{ name: 'testField' }}
        meta={{ showErrors: true, invalid: true }}
      />
    </FormControl>
  </Section>
)
