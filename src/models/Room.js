const { Model, DataTypes, db } = require('../services/db');

class Room extends Model {}

Room.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    defaultValue: 1,
  },
  latin_identifier: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  accessType: {
    type: DataTypes.SMALLINT,
    defaultValue: 1,
    allowNull: false,
  },
},
{
  sequelize: db,
});

module.exports = Room;
