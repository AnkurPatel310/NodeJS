import express from 'express'
import { MongoClient } from 'mongodb';
import morgan from 'morgan';

const dbName = "schoolDB"
const url = "mongodb://localhost:27017"

const client = new MongoClient(url);

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')

client.connect().then((connection) => {
    const db = connection.db(dbName);

    // Simple get API
    app.get('/api', async (req, res) => {
        const data = db.collection('students');
        const result = await data.find().toArray();
        res.send(result);
    });

    // Home Page : Display all users
    app.get('/', async (req, res) => {
        const data = db.collection('students');
        const result = await data.find().toArray();
        res.render('users', { userData: result });
    });

    // Register User
    app.get('/signup', (req, res) => {
        res.render('register');
    });

    //Store user data    
    app.post('/register', async (req, res) => {
        const data = db.collection('students');
        const result = await data.insertOne(req.body);
        res.redirect("/");
    });

    // POST Method API
    app.post('/register-api', async (req, res) => {
        const { name, grade } = req.body;
        if (!name || !grade) {
            res.send({ message: "Operation Failed" })
            return false;
        }
        const data = db.collection('students');
        const result = await data.insertOne(req.body);
        res.send({ message: "Data Inserted", result: result })
    });

    app.use((req, res) => {
        res.status(404).send("Page not found");
    })

    app.use((error, req, res, next) => {
        res.status(error.status || 500).render('500');
    })
})

app.listen(6100);