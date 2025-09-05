// const express = require('express');

import express from 'express';
import home from './pages/home.js';
import about from './pages/about.js';
import { signup } from './pages/signup.js';
import { formSubmit } from './pages/formSubmit.js';
import path from 'path';
import { viewDir } from './path.js';

const app = express();

app.get("",(req,res)=>{
    // res.send(home());

    res.sendFile(path.resolve('view/home.html'));
});

app.get("/login",(req,res)=>{   
    res.sendFile(path.resolve('view/login.html'));
});

app.get("/about",(req,res)=>{
    res.send(about());
});

app.get("/signup",(req,res)=>{
    res.send(signup());
});

app.post("/submit",(req,res)=>{
    res.send(formSubmit());
});

app.use((req, res)=>{
    res.status(404).sendFile(viewDir+"/404.html");
});

app.listen(6100);