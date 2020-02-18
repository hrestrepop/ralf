import * as _ from 'ramda'

export const validate = value => {
  return validators => {
    const errors = _.pipe(
      _.map(validator => validator(value)),
      _.filter(result => !!result)
    )(validators)

    return {
      errors,
      invalid: !!errors.length,
      valid: !errors.length
    }
  }
}

export const email = (message = 'Invalid email address') => value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? message
    : null

export const required = (message = "This field can't be empty") => value => {
  if (value && typeof value === 'object') {
    return Object.keys(value).length ? null : message
  }

  return value ? null : message
}

export const sameAs = key => (value, values) => {
  const twin = values[key] || ''

  return value === twin ? null : 'This field must be the same!'
}

export default {
  email,
  required,
  sameAs
}
