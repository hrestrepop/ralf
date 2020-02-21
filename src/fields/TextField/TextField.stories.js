import React from 'react'

import Section from '../../components/Section'
import TextField from './TextField'
import FormControl from '../FormControl'

import { required, minLength, email } from '../../validators'

export default { title: 'Text Field' }

export const withDefault = () => (
  <Section title="Basic TextField">
    <FormControl label="Name:">
      <TextField
        input={{
          name: 'title',
          className: 'test-class',
          placeholder: 'Place your name...',
          disabled: false
        }}
      />
    </FormControl>
  </Section>
)

export const withRequiredValidation = () => (
  <Section title="TextField with required validations">
    <FormControl label="Name:">
      <TextField
        input={{
          name: 'title',
          className: 'test-class',
          placeholder: 'Place your name...',
          disabled: false
        }}
        validators={[required()]}
      />
    </FormControl>
  </Section>
)

export const withMinValidation = () => (
  <Section title="TextField with min validation">
    <FormControl label="Name:">
      <TextField
        input={{
          name: 'title',
          className: 'test-class',
          placeholder: 'Place your title with 4 chars min...',
          disabled: false
        }}
        validators={[required(), minLength(4)]}
      />
    </FormControl>
  </Section>
)

export const withEmailValidation = () => (
  <Section title="TextField with email validations">
    <FormControl label="Your Email:">
      <TextField
        input={{
          name: 'title',
          className: 'test-class',
          placeholder: 'Place your email...',
          disabled: false,
          type: 'email'
        }}
        validators={[required(), email()]}
      />
    </FormControl>
  </Section>
)
