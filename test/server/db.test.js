const request = require('supertest')

const env = require('./test-environment')
const Db = require('../../server/db/db.js')

// Manage the test database

let testDb = null
beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

// Tests

test('correctly grab users information', () => {
  return Db.getUsers(testDb)
    .then(users => {
      expect(users.length).toBe(5)
      expect(users[0].hasOwnProperty('name')).toBeTruthy()
    })
})

test('correctly grab levels information', () => {
  return Db.getLevels(testDb)
    .then(levels => {
      expect(levels.length).toBe(1)
      expect(levels[0].hasOwnProperty('population_bad')).toBeTruthy()
    })
})

test('correctly grab bubbles information', () => {
  return Db.getBubbles(testDb)
    .then(bubbles => {
      expect(bubbles.length).toBe(2)
      expect(bubbles[0].hasOwnProperty('speed')).toBeTruthy()
    })
})

test('correctly return individual level', () => {
  let id = 1
  return Db.getLevel(id, testDb)
  .then(level => {
      expect(level.id).toBe(id)
      expect(level.hasOwnProperty('population_bad')).toBeTruthy()
  })
})
