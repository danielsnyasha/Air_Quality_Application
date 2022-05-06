const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  port: "3200",
  user: "test_user",
  password: "nyasha_assignment",
  database: "trial_db",

});

module.exports = db;
