// Globale Error Handling Middleware to Handle Error from(express-async-handler)
const globalError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  // res.status(err.statusCode).json({
  //   status: err.status,
  //   error: err,
  //   messge: err.messge,
  //   stack: err.stack,
  // });

  //Refactor above code
  if (process.env.NODE_ENV.trim() === "development") {
    sendErrorDev(err,res);
  }
  else{
    sendErrorProd(err,res);
  }
};

//Showing Error in Development Mode
const sendErrorDev = (err, res) => {
  return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    messge: err.messge,
    stack: err.stack,
  });
};

//Showing Error in Development Mode
// Import cross-env to use it package.json
const sendErrorProd = (err,res) => {
  return res.status(err.statusCode).json({
    status: err.status,
    messge: err.messge,
  });
}

module.exports = globalError;
