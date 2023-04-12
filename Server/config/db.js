const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "96308284",
  database: "crud",
});
module.exports = connection;
