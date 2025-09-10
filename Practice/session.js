import express from 'express'
import session from 'express-session';

const app = express();

app.set('view engine','ejs')

app.use(express.urlencoded())

app.use(session({
    secret:'akp'
}))

app.get('/',(req,res)=>{           
    res.render('home');    
})

app.post('/submit',(req,res)=>{
    req.session.data = req.body;    
    res.redirect('/profile-page')
});

app.get('/profile-page',(req,res)=>{        
    const {name,city} = req.session.data;
    res.render('profilePage',{name,city})    
})

app.listen(6100)