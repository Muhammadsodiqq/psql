const DataBAse = require("../modules/postgres")


class UserModel {

    async createUser (name,age) {
        if(name,age) {
            let {rows} = await DataBAse.query(`INSERT INTO users(user_name,user_age) VALUES ('${name}','${age}')`)
            return rows
        }
    }
    async getUser() {
        let {rows} = await DataBAse.query(`SELECT * FROM users`)
        return rows
    }
}


module.exports =  new UserModel()