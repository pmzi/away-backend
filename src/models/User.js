const hash = require('../helpers/hash');
const {
  Model,
  DataTypes,
  db,
} = require('../services/db');
const Room = require('./Room');

class User extends Model {}

User.init({
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
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      this.setDataValue('password', hash(value));
    },
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  type: {
    type: DataTypes.SMALLINT,
    defaultValue: 0,
    allowNull: false,
  },
  isBanned: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  jwtV: {
    type: DataTypes.SMALLINT,
    defaultValue: 1,
    allowNull: false,
  },
}, {
  sequelize: db,
});

// Friend Ships

User.belongsToMany(User, {
  through: 'Friends',
  as: 'from',
  foreignKey: 'userFromID',
});

User.belongsToMany(User, {
  through: 'Friends',
  as: 'to',
  foreignKey: 'userToID',
});

// Room Ownership

User.hasMany(Room, {
  foreignKey: {
    name: 'ownerID',
  },
});

Room.belongsTo(User, {
  foreignKey: 'ownerID',
});

module.exports = User;
