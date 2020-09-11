exports.createSuccess = function createSuccess(data) {
  return {
    data,
  };
};

exports.createError = function createError(error) {
  return {
    error,
  };
};
