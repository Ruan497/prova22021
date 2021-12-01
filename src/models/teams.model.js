module.exports = (sequelize, DataTypes) => {
    const teams = sequelize.define('teams', {
      nome: DataTypes.STRING,
      estado: DataTypes.STRING,
      sites: DataTypes.STRING
    }, {
      timestamps: false,
      freezeTableName: true
    })
  
    return teams
  }