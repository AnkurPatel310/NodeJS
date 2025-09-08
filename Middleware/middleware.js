import express from 'express'
const app = express();

// Middleware Example : Age Check 
// function checkAge(req, res, next) {
//     if (!req.query.age || req.query.age < 18) {
//         res.send("You cannot access this page!")
//     } else {
//         next();
//     }
// }

// app.use(checkAge);

// Middleware Example : IP Check 
function checkIP(req, res, next) {

    const ip = req.socket.remoteAddress;
    if (ip.includes("192.168.1.19")) {
        res.send("IP Blocked!! You cannot access this page!")
    } else {
        next();
    }
}

app.use(checkIP);

app.get("/", (req, res) => {
    res.send("Home Page")
});

app.get("/about", (req, res) => {
    res.send("About Page")
});

app.get("/contact", (req, res) => {
    res.send("Contact Page")
});

app.use((req, res) => {
    res.status(404).send(`<h4>Page Not Found</h4><h5><a href="/">Go Back Home</a></h5>`);
});

app.listen(6100);