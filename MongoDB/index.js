import express from 'express'
import { MongoClient } from 'mongodb';

const dbName = "schoolDB"
const url = "mongodb://localhost:27017"

const client = new MongoClient(url);

async function dbConnection() {
    try {
        await client.connect();
        const db = client.db(dbName)
        const collection = db.collection('students');
        return await collection.find().toArray();
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

const app = express();

app.set('view engine','ejs')

app.get('/',async (req,res)=>{
    const studentData = await dbConnection();            
    
    res.render('data',{students:studentData})
});

app.listen(6100);