import express from 'express'
import path from 'path'

const app = express();

// Built-in Middleware Example
app.use(express.urlencoded());
app.use(express.static('public'));

app.get("/", (req, res) => {
    const filePath = path.resolve("view/login.html")
    res.sendFile(filePath)
});

app.post("/submit", (req, res) => {
    console.log(req.body);
    const username = req.body.username;        
    res.send(`<h3>Submitted Data </h3> Username :`+username)
});

app.use((req, res) => {
    res.status(404).send(`<h4>Page Not Found</h4><h5><a href="/">Go Back Home</a></h5>`);
});

app.listen(6100);