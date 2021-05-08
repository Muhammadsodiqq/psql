const express = require("express")
const config = require("./config")
const app = express()
const path = require("path")
const glob = require("glob")
app.listen(config.PORT, () => console.log(config.PORT))

//settings

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.set('view engine', "ejs")



glob("routes/*Route.js", (err,files) => {
    files.forEach(file => {
        let route = require(path.join(__dirname, file))
        if(route.router && route.path)
 {
     app.use(route.path,route.router)
 }    })
})