require('dotenv').config()
const nodemailer =require('nodemailer')
const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
// const mailSchema = require('./mailSchema')
// const hbs = require('nodemailer-express-handlebars')


const app = express()
// const mongodb = 'mongodb+srv://dahumble:anuebunwada1.@mailer.7oecdwf.mongodb.net/my projects'
// mongoose.connect(mongodb) 


// .then(()=>{
//     console.log("datebase connected")
// }).catch((err)=>{
//    console.log(err, "Database connection failed")
// })

app.set('view engine', 'ejs')
app.use('/assets', express.static('assets'))
app.use(express.urlencoded ({extended:true}))


//home page
app.get('/', async(req, res)=>{
    res.render('mailer')
})

//success page
app.get('/success', (req, res)=>{
    res.render('success')
})

//failed page
app.get('/failed', (req, res)=>{
    res.render('failed')
})

//save post
app.post('/mailer', (req,res)=>{
    const details = req.body
    console.log(details)
    // res.render('success')

    input()
    async function input(){
        try{
            const mails = new mailSchema({
                from: details.from,
                password:details.password,
                email: details.email,
                subject:details.subject,
                mail:details.mail,
                attach:details.attach
                
            })
            console.log(mails.email)
            // await mails.save()
        }catch(err){
            console.log(err.message)
        }
    }
    res.render('success')

    //step 1 config the transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: details.from,
        pass: details.password
    }
});


//step 2 config the mail options
const mailOptions = {
    // from: 'anuebunwadaniel66@gmail.com',
   
    to: details.email,
    subject: details.subject,
    text:  details.mail,
    // attachments:[
    //     {
    //         // filename:details.attach
    //         // path:"assets/logo.jpg"

    //     }
    // ]
}

transporter.sendMail(mailOptions, (error, info)=>{
    if (error){
        res.render('failed')
        console.log(error)
    }else {
        res.render('success')
        console.log('Email sent');
    }
})
})

const port =process.env.PORT||5000
app.listen(port,()=>{
    console.log(`app start on ${port}`)
})