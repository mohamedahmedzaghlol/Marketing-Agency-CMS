// Import express
const express = require("express");

//Import dotenv
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });
//Import morgan
const morgan = require("morgan");
//Import  cors
const cors = require("cors");
//Import dbConnection
const dbConnection = require("./config/database");
//Connect with database
dbConnection();
//Import categoryRoute from routes
const categoryRoute = require("./routes/categoryRoute");
//Import userRoute from routes
const userRoute = require("./routes/userRoute");
//Import authRoute from routes
const authRoute = require("./routes/authRoute");
//Import ApiError to handle Operational error
const ApiError = require("./utils/apiError");
//Import globalError from middlewares folder from errorMiddleware.js
const globalError = require("./middlewares/errorMiddleware");

//take object or instance from express to use its methods
const app = express();

//Use cors
// Enable other domains to access my application
app.use(cors());
app.options(/.*/, cors());

// Middlewares
app.use(express.json()); // to parse json to js object

if (process.env.NODE_ENV=="development") {
  app.use(morgan("dev"))
  console.log(`mode: ${process.env.NODE_ENV}`);
}

// Mount Routes
// http://localhost:3000/api/v1/categories
app.use("/api/v1/categories", categoryRoute);
// http://localhost:3000/api/v1/users
app.use("/api/v1/users", userRoute);
//http://localhost:3000/api/v1/auth
app.use("/api/v1/auth", authRoute);
// Midlle ware to handle error that I cannot handle it (Such as URL Not Found)
//Example ----> URL : http://localhost:3000/api/v2/categories
app.all(/.*/,(req,res,next) => {
  // Create Unexpected Error
  // const err = new Error(`Cannot find this route: ${req.originalUrl}`);
  //Send the Error to Globale Error Handling Middleware to handle it
  // next(err.message);

  // Refactor this code by using Class ApiError
  next(new ApiError(`Cannot find this route: ${req.originalUrl}`,400));
});



// Globale Error Handling Middleware to Handle Error from(express-async-handler)
// app.use((err,req,res,next) => {
//   res.status(400).json({err});
// });
//Refactor above code 
app.use(globalError);


const PORT = process.env.PORT

const server = app.listen(PORT,() => {
  console.log(`App running on port ${PORT}`);
});

//Middleware to handle rejection outside express
process.on("unhandledRejection", (err) => {
  console.log(`unhandledRejection Errors: ${err.name} | ${err.message}`);
  server.close(() => {
    console.error("The server is shutting down");
    process.exit(1);
  });
});
