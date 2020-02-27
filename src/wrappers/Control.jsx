import React from 'react'

import ErrorList from './ErrorList'

const Control = ({ children, showErrors, errors, loading }) => {
  return (
    <div className={`control ${loading ? 'is-loading' : ''}`}>
      {children}
      <ErrorList showErrors={showErrors} errors={errors}></ErrorList>
    </div>
  )
}

export default Control
