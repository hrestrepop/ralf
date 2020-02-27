import React from 'react'
import ReactDOM from 'react-dom'

import Section from './components/Section'
import FormControl from './fields/FormControl'
import TextField from './fields/TextField'
import TextAreaField from './fields/TextAreaField'
import CheckField from './fields/CheckField'
import Autocomplete from './fields/Autocomplete'

import { required, email, minLength } from './validators'
import countries from './mocks/countries.json'

import './index.scss'

const fsearchCountries = keyword =>
  countries.filter(({ name }) => new RegExp(keyword, 'gim').test(name))

const App = () => {
  return (
    <div className="app">
      <Section title="TextField with validations">
        <form autoComplete="off">
          <FormControl label="Name:">
            <TextField
              input={{
                name: 'title',
                className: 'test-class',
                placeholder: 'Place your name...',
                disabled: false,
                // value: 'harri@gmail'
              }}
              handleOnChange={updated => {
                console.log('updated is', updated)
              }}
              validators={[required(), email(), minLength()]}
            />
          </FormControl>

          <FormControl label="Select one country:">
            <Autocomplete
              input={{
                name: 'born',
                placeholder: 'Start typing...'
              }}
              handleOnSelect={e => console.log(e)}
              keyId="name"
              getResults={fsearchCountries}
              getView={item => `${item.name}`}
            />
          </FormControl>
        </form>
      </Section>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
