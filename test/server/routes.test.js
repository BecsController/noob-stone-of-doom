const request = require('supertest')

jest.mock('../../server/db/db', () => ({
  getUsers: () => Promise.resolve([
    {id: 1, name: 'RossDog'},
    {id: 2, name: 'OhHayHay'}
  ])
}))

const server = require('../../server/server')

test('GET /users', () => {
  return request(server)
    .get('/api/users')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(2)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})
