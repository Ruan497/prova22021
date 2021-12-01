const { teams } = require('../models/index')

const listAll = async () => {
  return item = await teams.findAll()
}

module.exports = {
  listAll
}