const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "14086123",
    host: "localhost",
    port: 5432,
    database: "chinese001"
});

module.exports = pool;