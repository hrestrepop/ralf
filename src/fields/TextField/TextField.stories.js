import React from 'react'
import { action } from '@storybook/addon-actions'

import Section from '../../components/Section'
import TextField from './TextField'
import FormControl from '../FormControl'
import { required, minLength, email } from '../../validators'

const actionTag = action('Field Props:')

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
        handleOnChange={actionTag}
      />
    </FormControl>
  </Section>
)

export const withErrorsWrapper = () => (
  <Section title="Build-in errors wrapper component">
    <FormControl label="Company Name:">
      <TextField
        input={{
          name: 'title',
          className: 'test-class',
          placeholder: 'Place your name...',
          disabled: false
        }}
        handleOnChange={actionTag}
        showErrorList={true}
        validators={[required(), minLength(4), email()]}
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
        handleOnChange={actionTag}
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
        handleOnChange={actionTag}
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
        handleOnChange={actionTag}
        validators={[required(), email()]}
      />
    </FormControl>
  </Section>
)
