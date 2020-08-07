const sqlite3 = require('sqlite3').verbose();

// connect to database
const db = new sqlite3.Database('./db/election.db', err => {
    // informs if error in connection
    if (err) {
        return console.log(err.message);
    }
    console.log('Connected to the election database');
});

module.exports = db;