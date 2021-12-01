const teamsService = require('../services/teams.service')

const listAll = async (req, res) => {
  const item = await teamsService.listAll()
  res.send(item)
}

module.exports = {
  listAll
}