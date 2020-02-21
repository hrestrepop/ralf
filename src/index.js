import React from 'react'
import ReactDOM from 'react-dom'

import Section from './components/Section'
import FormControl from './fields/FormControl'
import TextField from './fields/TextField'
import TextAreaField from './fields/TextAreaField'

import { required, email, minLength } from './validators'

import './index.scss'

const App = () => {
  return (
    <div className="app">
      <Section title="TextField with validations">
        <FormControl label="Name:">
          <TextField
            input={{
              name: 'title',
              className: 'test-class',
              placeholder: 'Place your name...',
              disabled: false
            }}
            onUpdate={updated => {
              console.log('updated is', updated)
            }}
            validators={[required(), email(), minLength()]}
          />
        </FormControl>

        <FormControl label="Description:">
          <TextAreaField
            input={{
              name: 'description',
              className: 'test-class-1',
              placeholder: 'Place your description here...',
              disabled: false
            }}
            onUpdate={updated => {
              console.log('updated textarea is', updated)
            }}
            validators={[required(), minLength(10)]}
          />
        </FormControl>
      </Section>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
