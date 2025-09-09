import express from 'express'
import { idWiseData, listUser, loadJsonData, userPortfolio } from './controller/listUsers.js';
import { handleError, handleRoute } from './controller/handleRoutes.js';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'))

app.set('view engine','ejs');

app.get('/',listUser)

app.get('/user/:name',userPortfolio)

// API example with Dynamic Routes
// List all json user data
app.get('/list-users',loadJsonData)

// Get specific json user data
app.get('/list-user/:id',idWiseData)

app.use(handleRoute)

app.use(handleError)

app.listen(6100);