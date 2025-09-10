import express from 'express'
import mongoose from 'mongoose';
import morgan from 'morgan';
import studentModel from './model/data.js';

const url = "mongodb://localhost:27017/schoolDB"

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

await mongoose.connect(url).then(()=>{
    console.log('db connected');
})

app.get('/',async (req,res)=>{
    const data = await studentModel.find();
    res.status(200).send(data);
})

app.listen(6100);