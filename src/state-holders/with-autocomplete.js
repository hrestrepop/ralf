import React, { useState, useCallback } from 'react'

const handleOnChange = updateState => ({ value, getResults }) => {
  return useCallback(
    fieldProps => {
      const newValue = fieldProps.value

      if (!newValue || newValue.length <= 0) {
        return updateState({
          selectedValue: '',
          selectedIndex: -1,
          results: [],
          openSuggestions: false
        })
      }

      const searchResults = getResults(newValue)

      updateState({
        selectedValue: newValue,
        selectedIndex: -1,
        results: searchResults,
        openSuggestions: searchResults.length > 0
      })
    },
    [value]
  )
}

const handleOnSelect = updateState => ({ value }) => {
  return useCallback(
    fieldProps => {
      const { index } = fieldProps
      const newValue = fieldProps.value

      updateState({
        selectedValue: newValue,
        selectedIndex: index,
        results: [],
        openSuggestions: false
      })
    },
    [value]
  )
}

const withAutocomplete = Field => fieldProps => {
  const { value, onStateChange } = fieldProps

  const [props, updateState] = useState({
    selectedValue: value || '',
    selectedIndex: -1,
    results: [],
    openSuggestions: false
  })

  const onChange = handleOnChange(updateState)(fieldProps)
  const onSelect = handleOnSelect(updateState)(fieldProps)

  const onEvent = eventFn => updatedField => {
    onStateChange({ ...fieldProps, value: updatedField.value })

    eventFn(updatedField)
  }

  return (
    <Field
      {...props}
      {...fieldProps}
      onChange={onEvent(onChange)}
      onSelect={onEvent(onSelect)}
    />
  )
}

export default withAutocomplete
