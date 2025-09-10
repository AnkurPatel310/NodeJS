import express from 'express'
import mongoose from 'mongoose';
import morgan from 'morgan';

const url = "mongodb://localhost:27017/schoolDB"

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

async function dbConnection(){
    await mongoose.connect(url)
    const schema = mongoose.Schema({
        name:String,
        grade:String
    })

    const model = mongoose.model('students',schema)
    const result = await model.find();
    console.log(result);    
}

dbConnection();

app.listen(6100);