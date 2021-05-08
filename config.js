require('dotenv').config()





module.exports = {
    PGHOST:process.env.PGHOST,
    PGUSER:process.env.PGUSER,
    PGPASS:process.env.PGPASS,
    PGDB:process.env.PGDB,
    PGPORT:process.env.PGPORT
}