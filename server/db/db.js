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

module.exports = {
  getUsers,
  getBubbles,
  getLevels
}
