import express from 'express'
import multer from 'multer'

// Upload file with original name
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads')
    },filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({storage});

const app = express()
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('upload')
})

app.post('/upload',upload.single('document'),(req,res)=>{
    res.send({message:'File Uploaded',info:req.file})
})

app.listen(6100)