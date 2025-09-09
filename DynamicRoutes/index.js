import express from 'express'
import { listUser, userPortfolio } from './controller/listUsers.js';
import { handleError, handleRoute } from './controller/handleRoutes.js';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'))

app.set('view engine','ejs');

app.get('/',listUser)

app.get('/user/:name',userPortfolio)

app.use(handleRoute)

app.use(handleError)

app.listen(6100);