// @desc ---> this class is responsible about Operational errors

class ApiError extends Error{
  constructor(message,statusCode){
    super(message);
    this.statusCode =statusCode;
    this.status = `${statusCode}`.startsWith('4')? "fail" : "error";
    this.isOperational = true;
  }
}

//Export ApiError to use it to handle Operational error
module.exports = ApiError;