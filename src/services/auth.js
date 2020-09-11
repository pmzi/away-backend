const jwt = require('jsonwebtoken');

const privateKey = process.env.TOKEN_KEY;

exports.createToken = function createToken(data) {
  return jwt.sign(data, privateKey, { expiresIn: '7d' });
};
