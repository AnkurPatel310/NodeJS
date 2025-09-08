import express from 'express'
import morgan from 'morgan';
const app = express();

app.use(morgan('dev'));

app.get("/",(req, res)=>{
    res.send("Home Page");
})

app.get("/Login",(req, res)=>{
    res.send("Login Page");
})

app.listen(6100);