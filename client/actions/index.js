import request from 'superagent'

export const REQUEST_BUBBLES = 'REQUEST_BUBBLES'
export const RECEIVE_BUBBLES = 'RECEIVE_BUBBLES'

export const requestBubbles = () => {
  return {
    type: REQUEST_BUBBLES
  }
}

export const receiveBubbles = (bubbles) => {
  return {
    type: RECEIVE_BUBBLES,
    bubbles: bubbles.map(bubble => console.log(bubble.initialX, bubble.initialY)) //obvious placehoder code is obvious
  }
}