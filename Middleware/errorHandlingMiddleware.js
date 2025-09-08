import express from 'express'
import morgan from 'morgan';
const app = express();

app.use(morgan('dev'))

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.get("/user",(req,res)=>{
    res.send("User Page")
})

// Error Handling Middleware [Anonymous Function]
app.use((error,req,res,next)=>{
    res.status(error.status || 500).send("Try after some time!")
})

app.listen(6100);