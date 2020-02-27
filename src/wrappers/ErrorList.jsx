import React from 'react'

const ErrorList = ({ showErrors, errors }) => {
  return (
    <>
      {showErrors &&
        errors.map((error, key) => (
          <p className="help is-danger is-block" key={key}>
            {error}
          </p>
        ))}
    </>
  )
}

export default ErrorList
