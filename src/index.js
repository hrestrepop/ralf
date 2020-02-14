import React from 'react'
import ReactDOM from 'react-dom'

import TextField from './fields/TextField'

import './index.scss'

const App = () => {
  return (
    <div className="app">
      <p>This is a field</p>

      <TextField input={{ name: 'testField' }} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
