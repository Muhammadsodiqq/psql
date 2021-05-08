
const Users = require("./models/userModel")


async function main() {
    let res = await Users.getUser()
    console.log(res);
}

main()