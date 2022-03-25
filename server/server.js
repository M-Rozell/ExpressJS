const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

let app = express();


///////Advanced//////
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/formsubmissions', (req, res) => {

    let currentArr = [];

    console.log(req.body.email);
    console.log(req.body.name);
    res.send(`Thank you  ${req.body.name} at ${req.body.email}`);

    const currentForm = {
        name: req.body.name,
        email: req.body.email
    }

    currentArr.push(currentForm)
    const data = JSON.stringify(currentArr)

    fs.writeFileSync('log.json', data)

})



/////////////////5.///////////////////
// app.use((req, res, next) => {
//     console.log(req.originalUrl);
//     next();
// });    



//////////////////3.///////////////////
// app.get('/', (req, res) => {
//     res.send('Hello from the web server side...')
// });


/////////////////4.//////////////////////
app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);