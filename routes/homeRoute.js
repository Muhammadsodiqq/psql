const router = require("express").Router()
const Users = require("../models/userModel")

router.get('/',async(req,res) => {
    let users = await Users.getUser()
    res.render("index", {
        users,
        error:""
    })
})


router.post("/", async(req,res) => {
try {
    if(req.body.name && req.body.age) {
    await Users.createUser(req.body.name, req.body.age)
    }else{
        throw "fields aren't complated"
    }

    res.redirect("/")
} catch (e) {
    res.render("index", {
        users,
        error:e
    })
}
})

router.post("/delete", async(req,res) => {
try {
    if(req.body.id) {
        await Users.delete(req.body.id)
    }
    res.redirect('/')
} catch (e) {
    res.render("index", {
        users,
        error:""
    })
}
})

router.post("/edit", async(req,res)=> {
try {
    if(req.body.uploadid) {
        await Users.edit(req.body.upload_name,req.body.upload_age , req.body.uploadid)
    }
    res.redirect("/")
} catch (e) {
    res.render("index", {
        users,
        error:""
    })
}
})
module.exports = {
    path:"/",
    router
}