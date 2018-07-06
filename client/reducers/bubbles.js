import {RECEIVE_BUBBLES} from '../actions'

const initialState = []

function bubbles(state = initialState, action) {
  const newState = {}
  Object.assign(newState, state)

  switch (action.type) {
    case RECEIVE_BUBBLES:

      return action.bubbles
    default:
      return state;
  }
}

export default bubbles;
