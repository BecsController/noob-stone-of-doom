const request = require('supertest')

jest.mock('../../server/db/db', () => ({
  getUsers: () => Promise.resolve([
    {id: 1, name: 'RossDog'},
    {id: 2, name: 'OhHayHay'}
  ]),
  getLevels: () => Promise.resolve([
    {id: 1, name: 'RossDog'},
  ]),
  getBubbles: () => Promise.resolve([
    {id: 1, name: 'RossDog'},
    {id: 2, name: 'OhHayHay'},
    {id: 3, name: 'Cliffhanger'}
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

test('GET /bubbles', () => {
  return request(server)
    .get('/api/bubbles')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(3)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('GET /levels', () => {
  return request(server)
    .get('/api/levels')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(1)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})
