import React from 'react'
import { action } from '@storybook/addon-actions'

import { required, minLength } from '../../validators'
import Section from '../../components/Section'
import TextAreaField from './TextAreaField'
import FormControl from '../FormControl'

const actionTag = action('Field Props:')

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
        handleOnChange={actionTag}
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
        handleOnChange={actionTag}
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
        handleOnChange={actionTag}
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
        handleOnChange={actionTag}
        validators={[
          required(
            'Please fill this right away :| so that this custom message disappears'
          )
        ]}
      />
    </FormControl>
  </Section>
)
