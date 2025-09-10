import express from 'express'
import mongoose from 'mongoose';
import morgan from 'morgan';
import studentModel from './model/data.js';

const url = "mongodb://localhost:27017/schoolDB"

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

await mongoose.connect(url).then(() => {
    console.log('db connected');
})

// GET API
app.get('/', async (req, res) => {
    const data = await studentModel.find();
    res.status(200).send(data);
})

// POST API
app.post('/save', async (req, res) => {
    const { name, grade } = req.body;
    if (!name || !grade) {
        res.send({ message: 'Insert Failed', result: false, data: null })
        return false;
    } else {
        const studentData = studentModel.create(req.body);
        res.send({ message: 'Data Inserted', result: true, data: req.body })
    }
})

app.listen(6100);