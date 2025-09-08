import express from 'express'
const app = express();

// Route Middleware Example : Age Check 
function checkAgeRouteMiddleware(req, res, next) {
    if (!req.query.age || req.query.age < 18) {
        res.send("You cannot access this page!")
    } else {
        next();
    }
}

function checkURL(req, res, next) {
    console.log(req.url);
    next();
}

app.get("/", (req, res) => {
    res.send("Home Page")
});

app.get("/about",checkURL, (req, res) => {
    res.send("About Page")
});

app.get("/contact",checkURL,checkAgeRouteMiddleware, (req, res) => {
    res.send("Contact Page")
});

app.use((req, res) => {
    res.status(404).send(`<h4>Page Not Found</h4><h5><a href="/">Go Back Home</a></h5>`);
});

app.listen(6100);