import React from 'react'
import ReactDOM from 'react-dom'

import Section from './components/Section'
import FormControl from './fields/FormControl'
import TextField from './fields/TextField'

import { required, email } from './validators'

import './index.scss'

const App = () => {
  return (
    <div className="app">
      <Section title="TextField with validations">
        <FormControl label="Name:">
          <TextField
            input={{
              name: 'testField',
              className: 'test-class'
            }}
            onUpdate={({ value }) => {
              console.log('value is', value)
            }}
            validators={[required(), email()]}
          />
        </FormControl>
      </Section>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
