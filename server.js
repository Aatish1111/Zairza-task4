const express = require('express');
const sendMail = require('./mail');
const app = express();
const PORT = process.env.PORT || 5004;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/email', (req, res) => {
    console.log(req.body);
    const { subject, email, text} = req.body;

    sendMail(email, subject, text, function(err, data){
        if(err){
            res.status(500).json({ message: 'Internal Error' })
        } else{
            res.send('Email is sent');
        }
    })
    // res.send('Data sent successfully');
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})