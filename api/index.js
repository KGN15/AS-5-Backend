const app = require('../src/app')
require("dotenv").config()
const connectDB = require('../src/db/DB')
connectDB();

module.exports = app;