import {receiveBubbles} from '../../client/actions/index'

test('Receive bubbles action creator', () => {
  const fakeBubbles = [
    'Hello',
    'Howdy'
  ]

  const expected = {
    type: 'RECEIVE_BUBBLES',
    bubbles: fakeBubbles
  }

  const actual = receiveBubbles(fakeBubbles)

  expect(actual).toEqual(expected)
})
