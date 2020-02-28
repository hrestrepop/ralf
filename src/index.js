import React from 'react'
import ReactDOM from 'react-dom'

import Section from './components/Section'
import FormControl from './fields/FormControl'
import TextField from './fields/TextField'
import TextAreaField from './fields/TextAreaField'
import CheckField from './fields/CheckField'
import Autocomplete from './fields/Autocomplete'

import { required, email, minLength } from './validators'
import { fSearchCountries } from './utils'

import './index.scss'

const App = () => {
  return (
    <div className="app">
      <Section title="TextField with validations">
        <form autoComplete="off">
          {/* <FormControl label="Name:">
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
          </FormControl> */}

          {/* <FormControl label="Select one country:">
            <Autocomplete
              input={{
                name: 'born',
                placeholder: 'Start typing...'
              }}
              handleOnSelect={e => console.log(e)}
              keyId="name"
              getResults={fSearchCountries}
              getView={item => `${item.name}`}
            />
          </FormControl> */}

          <FormControl label="Want to be part of us?">
            <CheckField
              input={{
                name: 'join',
                type: 'radio',
                value: 'YES',
                checked: true
              }}
              label="Yes"
              handleOnChange={updated => {
                console.log('radio1 updated is', updated)
              }}
            />
            <CheckField
              input={{
                name: 'join',
                type: 'radio',
                value: 'NO'
              }}
              label="No"
              handleOnChange={updated => {
                console.log('radio2 updated is', updated)
              }}
            />
          </FormControl>

          <FormControl label="Terms and conditions:">
            <CheckField
              input={{
                name: 'terms',
                type: 'checkbox'
                // value: 'OFF'
              }}
              label="Accept terms and conditions"
              onUpdate={updated => {
                console.log('updated checkbox is', updated)
              }}
            />
          </FormControl>
        </form>
      </Section>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
