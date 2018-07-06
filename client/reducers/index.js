import {combineReducers} from 'redux'

import bubbles from '../reducers/bubbles'
import users from '../reducers/users'
// import example from './example'

export default combineReducers({
  bubbles,
  users
})
