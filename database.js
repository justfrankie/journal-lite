const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mysql",
});

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});

let helpers = {
  getAll: (callback) => {
    let queryString = `SELECT * FROM journals`;
    connection.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  postEntry: (data, callback) => {
    let queryString = `INSERT INTO journals (title, date, body) VALUES ("${data.title}", "${data.date}", "${data.body}");`;
    connection.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  updateOne: (id, data, callback) => {
    let queryString = `UPDATE journals SET title="${data.title}", body="${data.body}" WHERE id =${id};`;
    connection.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  getOne: (id, callback) => {
    let queryString = `SELECT * FROM journals WHERE id =${id};`;
    connection.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
};

module.exports = helpers;
