import express from "express"
import morgan from "morgan"

const app = express()

app.use(morgan('dev'))
app.set('view engine','ejs')
app.use(express.urlencoded())

app.get("/",(req,res)=>{
    res.render("registerUser")
})

app.post("/submit",(req,res)=>{
    const userName = req.body.username;
    res.render("displayData",{userName:userName})
})

app.get("/list-users",(req,res)=>{
    const users = ['akp','dkp','kp']
    res.render("userData",{users:users})
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500).send("Internal Server Error")
})

app.use((req,res)=>{
    res.status(404).render('404');
})

app.listen(6100)