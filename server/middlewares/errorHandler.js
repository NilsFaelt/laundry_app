const errorHandler = (err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong";
  return res
    .status(errorStatus)
    .json({
      sucess: false,
      message: errorMessage,
      status: errorStatus,
      errStack: err.stack,
    });
};
module.exports = errorHandler;
