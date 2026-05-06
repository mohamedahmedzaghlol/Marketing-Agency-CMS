//Import mongoose
const mongoose = require("mongoose");
//Connect with Data base
const dbConnection = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((conn) => {
      console.log(`Database Connection ${conn.connection.host}`);
      
    })
    // .catch((err) => {
    //   console.log(`Database Error ${err}`);
    //   process.exit(1);
    // })
}

//Export dbConnection to use it in server.js
module.exports = dbConnection;