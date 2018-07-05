// this is an example of a basic router
//copy or rename this file, but dont build all your routes in here

const router = require('express').Router()
const db = require('../db/db.js')

router.get('/users', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json(users)
    })
})

router.get('/bubbles', (req, res) => {
  db.getBubbles()
    .then(bubbles => {
      res.json(bubbles)
    })
})

router.get('/levels', (req, res) => {
  db.getLevels()
    .then(levels => {
      res.json(levels)
    })
})

module.exports = router
