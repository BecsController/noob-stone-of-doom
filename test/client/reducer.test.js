import bubbleReducer from '../../client/reducers/bubbles'
import usersReducer from '../../client/reducers/users'

test('Reducer Initial State', () => {
  const expected = []

  const actual = bubbleReducer(undefined, {})

  expect(actual).toEqual(expected)
})

test('RECEIVE_BUBBLES', () => {
  const fakeBubbles = [
    {name: 'Hello'}
  ]
  const expected = [...fakeBubbles]

  const action = {
    type: 'RECEIVE_BUBBLES',
    bubbles: fakeBubbles
  }

  const actual = bubbleReducer(undefined, action)

  expect(actual).toEqual(expected)
})
