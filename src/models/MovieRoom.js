const { Model, db } = require('../services/db');
const Movie = require('./Movie');
const Room = require('./Room');

class MovieRoom extends Model {}

MovieRoom.init(null,
  {
    sequelize: db,
    timestamps: false,
  });

Room.belongsToMany(Movie, {
  through: MovieRoom,
});
Movie.belongsToMany(Room, {
  through: MovieRoom,
});

module.exports = MovieRoom;
