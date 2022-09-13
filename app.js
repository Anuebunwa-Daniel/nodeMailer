require('dotenv').config()
const nodemailer =require('nodemailer')
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')


const app = express()


//middleware
app.use('/assets', express.static('assets'))
app.set('view engine', 'ejs')
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.render('mailer')
})
app.get('/success', (req, res)=>{
    res.render('success')
})
app.get('/failed', (req, res)=>{
    res.render('failed')
})

app.post('/mailer', (req, res)=>{
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: req.body.from,
            pass: req.body.password
        }
    })
    const mailOptions ={
        from: req.body.from,
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.mail
    }
    transporter.sendMail(mailOptions,(error, info)=>{
        if(error){
            console.log(error);
            res.render('failed')
        }else{
            console.log('EMAIL SENT')
            res.render('success')
        }
    })
})
 



            
const port =process.env.PORT||5000
app.listen(port,()=>{
    console.log(`app start on ${port}`)
})