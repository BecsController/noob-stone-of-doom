const db = require('./connection')

function getUsers () {
  return db('users')
}

function getBubbles () {
  return db('bubbles')
}

function getLevels () {
  return db('levels')
}

function getLevel(id) {
  return db('levels').select().where({id}).first()
}

module.exports = {
  getUsers,
  getBubbles,
  getLevels,
  getLevel
}
