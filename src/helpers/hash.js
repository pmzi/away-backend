const md5 = require('md5');

module.exports = function hash(val) {
  const salt = process.env.PASSWORD_SALT;
  return md5(`${salt}${md5(`${salt}${val}${salt}`)}`);
};
