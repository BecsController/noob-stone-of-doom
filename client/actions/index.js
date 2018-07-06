import request from 'superagent'

export const REQUEST_BUBBLES = 'REQUEST_BUBBLES'
export const RECEIVE_BUBBLES = 'RECEIVE_BUBBLES'

export const requestBubbles = () => {
  return (dispatch) => {
      request
        .get(`/api/bubbles`)
        .then(res => {
           dispatch(receiveBubbles(res.body))
        })
        .catch(err => {
           console.log(err)
        })
    }
}

export const receiveBubbles = (bubbles) => {
  return {
    type: RECEIVE_BUBBLES,
    bubbles
  }
}

export const receiveUsers = (users) => {
  return {
    type: 'RECEIVE_USERS',
    users
  }
}

export const requestUsers = () => {
  return (dispatch) => {
    request
    .get(`/api/users`)
    .then(res => {
      dispatch(receiveUsers(res.body))
    })
    .catch(err => {
      console.log(err)
    })
  }
}
// module exports = {
//   REQUEST_BUBBLES,
//   RECEIVE_BUBBLES,
//   requestBubbles,
//   receiveBubble
// }

// export const actionCreator = (props) => {
//   return {
//     type: 'REDUCER_CASE',
//     variable: props
//   }
// }


//Request:

// export function asyncRequest () {
//   return (dispatch) => {
//     request
//       .get(`/api/path`)
//       .then(res => {
//          res.body will be the data response
//          dispatch(actionCreator(res.body))
//       })
//       .catch(err => {
//          err is an error
//       })
//   }
// }
