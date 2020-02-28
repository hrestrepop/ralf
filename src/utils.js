import countries from './mocks/countries.json'

const fSearchCountries = keyword =>
  countries.filter(({ name }) => new RegExp(keyword, 'gim').test(name))

export { fSearchCountries }
