import React from 'react'

import Section from '../../components/Section'
import TextAreaField from './TextAreaField'
import FormControl from '../FormControl'

import { required, minLength } from '../../validators'

export default { title: 'Textarea Field' }

export const withBasicSettings = () => (
  <Section title="Basic Textarea Field">
    <FormControl label="Description:">
      <TextAreaField
        input={{
          name: 'description',
          className: 'test-class-1',
          placeholder: 'Place your description here...',
          disabled: false
        }}
      />
    </FormControl>
  </Section>
)

export const withRequiredValidation = () => (
  <Section title="Textarea with required validation">
    <FormControl label="Description:">
      <TextAreaField
        input={{
          name: 'description',
          className: 'test-class-1',
          placeholder: 'Place your description here...',
          disabled: false
        }}
        validators={[required()]}
      />
    </FormControl>
  </Section>
)

export const withMinValidation = () => (
  <Section title="Textarea with validations (10 chars minimum)">
    <FormControl label="Description:">
      <TextAreaField
        input={{
          name: 'description',
          className: 'test-class-1',
          placeholder: 'Write at least 10 characteres here...',
          disabled: false
        }}
        validators={[minLength(10)]}
      />
    </FormControl>
  </Section>
)

export const withCustomMessage = () => (
  <Section title="Textarea with custom message">
    <FormControl label="Description:">
      <TextAreaField
        input={{
          name: 'description',
          className: 'test-class-1',
          placeholder: 'Place your description here...',
          disabled: false
        }}
        validators={[required('Please fill this right away :| so that this custom message disappears')]}
      />
    </FormControl>
  </Section>
)
