const {Pool} = require("pg")

let configg = require("../config")

const config = {
    host:configg.PGHOST,
    user:configg.PGUSER,
    max:20,
    password:configg.PGPASS,
    database:configg.PGDB
}



class DataBAse {
    constructor (config) {
        this.config = config
        this.#initialData()
    }

    async #initialData () {
        this.pool = new Pool(this.config)
    }

    async query (SQL_QUERY) {
        let client
        try {
            client = await this.pool.connect()
            return client.query(SQL_QUERY)
        } catch (e) {
            throw e
        }
        finally {
            client?.release()
        }
    }
}

module.exports = new DataBAse(config)