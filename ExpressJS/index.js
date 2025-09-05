// const express = require('express');

import express from 'express';
import home from './pages/home.js';
import about from './pages/about.js';
import { signup } from './pages/signup.js';
import { formSubmit } from './pages/formSubmit.js';

const app = express();

app.get("",(req,res)=>{
    res.send(home());
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

app.listen(6100);