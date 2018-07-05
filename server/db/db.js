const conn = require('./connection')

function getUsers (testDb) {
  const db = testDb || conn
  return db('users')
}

function getBubbles (testDb) {
  const db = testDb || conn
  return db('bubbles')
}

function getLevels (testDb) {
  const db = testDb || conn
  return db('levels')
}

function getLevel(id, testDb) {
  const db = testDb || conn
  return db('levels').select().where({id}).first()
}

module.exports = {
  getUsers,
  getBubbles,
  getLevels,
  getLevel
}
