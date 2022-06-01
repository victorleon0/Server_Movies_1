const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/MoviesI";

const connect = async () => {
  try {
    const dbConnection = await mongoose.connect(DB_URL);
    const { host, port, name } = dbConnection.connection;
    console.log(`Connecting to ${host} con puerto: ${port} y nombre: ${name}`);
  } catch (error) {
    console.log(`Error connecting to ${DB_URL}`, error);
  }
};

module.exports = {connect};