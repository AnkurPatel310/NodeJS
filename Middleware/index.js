import express from 'express'
const app = express();

function checkRoute(req,res,next){
    console.log("User is trying to access '" +req.url+ "' route");
    next();
}

app.use(checkRoute);

app.get("/",(req,res)=>{
    res.send("Home Page")
});

app.get("/about",(req,res)=>{
    res.send("About Page")
});

app.get("/contact",(req,res)=>{
    res.send("Contact Page")
});

app.use((req,res)=>{
    res.status(404).send(`<h4>Page Not Found</h4><h5><a href="/">Go Back Home</a></h5>`);
});

app.listen(6100);