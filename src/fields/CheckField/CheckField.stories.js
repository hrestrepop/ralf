import React from 'react'
import { action } from '@storybook/addon-actions'

import Section from '../../components/Section'
import CheckField from './CheckField'
import FormControl from '../FormControl'

const actionTag = action('Field Props:')

export default { title: 'Check Field' }

export const withCheckbox = () => (
  <Section title="Checkbox Field">
    <FormControl label="Terms and conditions:">
      <CheckField
        input={{
          name: 'terms',
          type: 'checkbox'
        }}
        label="Accept terms and conditions"
        handleOnChange={actionTag}
      />
    </FormControl>
  </Section>
)

export const withRadioButtons = () => (
  <Section title="Radio Button Fields ">
    <FormControl label="Want to be part of us?">
      <CheckField
        input={{
          name: 'join',
          type: 'radio',
          value: 'YES',
          checked: true
        }}
        label="Yes"
        handleOnChange={actionTag}
      />
      <CheckField
        input={{
          name: 'join',
          type: 'radio',
          value: 'NO'
        }}
        label="No"
        handleOnChange={actionTag}
      />
    </FormControl>
  </Section>
)
