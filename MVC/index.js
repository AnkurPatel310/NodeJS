import express from 'express'
import { controlUsers, handleError, handleRoute, landingPage } from './controller/userController.js';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.set('view engine','ejs');

app.get("/",landingPage);

app.get("/users",controlUsers);

app.use(handleRoute)

app.use(handleError)

app.listen(6100);