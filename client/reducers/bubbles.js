import {RECEIVE_BUBBLES} from '../actions'

const initalState = {
  bubbles:[],
}

function bubbles(state = initialState, action) {
  const newState = {}
  Object.assign(newState, state)

  switch (action.type) {
    case RECEIVE_BUBBLES:
      newState.bubbles = action.bubbles
      return newState;
    default:
      return newState;
  }
}

export default bubbles;