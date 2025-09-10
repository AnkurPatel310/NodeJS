import express from 'express'
import nodemailer from 'nodemailer'
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }))

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "testuser@gmail.com",
        pass: 'pass key from google',
    },
});

// Send Mail API
app.get('/send-mail', (req, res) => {
    const mailOptions = {
        from: 'testuser@gmail.com',
        to: "myfriend@gmail.com",
        subject: "Test Mail",
        text: "Have a great day :)"
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send({ message: "Mail not sent!" });
        } else {
            res.send({ message: "Mail sent successfully" });
        }
    })
});

app.listen(6100);