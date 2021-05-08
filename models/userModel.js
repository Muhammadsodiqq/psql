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

    async delete (id) {
        await DataBAse.query(`DELETE FROM users WHERE user_id='${id}'`)
    }

    async edit (name,id,oldID) {
        if(name != '' && id =='') {
            await DataBAse.query(`UPDATE users SET user_name='${name}' WHERE user_id='${oldID}'`)
        }else if(name == '' && id != '') {
            await DataBAse.query(`UPDATE users SET user_age='${id}' WHERE user_id='${oldID}'`)
        }else if(name != '' && id != '') {
            await DataBAse.query(`UPDATE users SET user_age='${id}' WHERE user_id='${oldID}'`)
            await DataBAse.query(`UPDATE users SET user_name='${name}' WHERE user_id='${oldID}'`)
        }
    }
}


module.exports =  new UserModel()


// -- UPDATE students SET name='ASADULLOH' WHERE name='Asad' ;
// -- DELETE FROM students WHERE full_name='Muhammad';
