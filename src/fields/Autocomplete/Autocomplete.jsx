import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'ramda'

import { withFormControl, withAutocomplete } from '../../state-holders'
import TextField from '../TextField'

import './Autocomplete.scss'

const FieldList = ({
  input,
  emptyMessage,
  keyId,
  getView,
  results,
  onSelect
}) => {
  if (!Array.isArray(results)) {
    return (
      <li className="autocomplete__item autocomplete__item--empty">
        <span>{results}</span>
      </li>
    )
  }

  if (!results.length) {
    return (
      <li className="autocomplete__item autocomplete__item--empty">
        <span>{emptyMessage}</span>
      </li>
    )
  }

  return results.map((item, index) => (
    <li
      key={index}
      className={`autocomplete__item ${
        input.value && input.value[keyId] === item[keyId] ? 'active' : ''
      }`}
    >
      <a href="#" onClick={evt => onSelect({ evt, value: item[keyId], index })}>
        {getView(item)}
      </a>
    </li>
  ))
}

const Autocomplete = props => {
  const { onChange, min, openSuggestions, selectedValue, input } = props

  return (
    <>
      <div className="autocomplete">
        <TextField
          input={{ ...input }}
          handleOnChange={onChange}
          value={selectedValue}
        />
        {openSuggestions && (
          <ul className="autocomplete__suggestions">{FieldList(props)}</ul>
        )}
      </div>
    </>
  )
}

Autocomplete.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
    name: PropTypes.string.isRequired
  }).isRequired,
  getResults: PropTypes.func.isRequired,
  getView: PropTypes.func.isRequired,
  keyId: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  emptyMessage: PropTypes.string,
  min: PropTypes.number
}

Autocomplete.defaultProps = {
  min: 2,
  emptyMessage: 'No results found'
}

export default compose(withFormControl, withAutocomplete)(Autocomplete)
