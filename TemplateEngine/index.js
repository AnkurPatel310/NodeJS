import express from "express"
import morgan from "morgan"

const app = express()

app.use(morgan('dev'))
app.set('view engine','ejs')

app.get("/",(req,res)=>{
    res.render("home",{name:"Ankur", city:"Chikhli"})
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500).send("Internal Server Error")
})

app.listen(6100)