import { compose } from 'ramda'

import withState from './with-state'
import withHandlers from './with-handlers'
import withValidators from './with-validators'

export default compose(withState, withHandlers, withValidators)
