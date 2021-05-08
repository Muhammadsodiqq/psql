const {Pool} = require("pg")

let configg = require("../config")

const config = {
    connectingString: 'postgres://otbawvnt:IAEtPv1WN7WZ1_LB2NDi_rsfyGv0S7xH@queenie.db.elephantsql.com:5432/otbawvnt'
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