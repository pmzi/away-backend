module.exports = function getDBError(e) {
  return e.errors.map((error) => error.message);
};
