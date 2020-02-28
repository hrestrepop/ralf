import React from 'react'
import { action } from '@storybook/addon-actions'

import { fSearchCountries } from '../../utils'
import Section from '../../components/Section'
import Autocomplete from './Autocomplete'
import FormControl from '../FormControl'

const actionTag = action('Field Props:')

export default { title: 'Autocomplete Field' }

export const withDefault = () => (
  <Section title="Default Autocomplete">
    <FormControl label="Select one country:">
      <Autocomplete
        input={{
          name: 'born',
          placeholder: 'Start typing...'
        }}
        keyId="name"
        getResults={fSearchCountries}
        getView={item => `${item.name}`}
        handleOnSelect={e => console.log(e)}
        handleOnChange={actionTag}
      />
    </FormControl>
  </Section>
)
