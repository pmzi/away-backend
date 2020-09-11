const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  logging: false,
  dialect: 'postgres',
});

exports.db = sequelize;

exports.Model = Model;

exports.DataTypes = DataTypes;
