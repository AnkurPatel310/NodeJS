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
        const result = await collection.find().toArray();

        console.log(result);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

dbConnection();

const app = express();

app.listen(6100);