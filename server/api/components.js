const router = require('express').Router()
const {Component} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const components = await Component.findAll()
    res.json(components)
  } catch (error) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const component = await Component.findByPk(req.params.id)
    res.json(component)
  } catch (error) {
    next(err)
  }
})
