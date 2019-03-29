const express = require('express');
const app = express();

//Set PUG as view engine
app.set('view engine', 'pug');

//Server static files from the public folder
app.use(express.static(__dirname + '/public'));

//Set Home route
app.get('/', (req, res)=> {
        //const person = people.profiles.find(p => p.id === req.query.id);
        res.render('critique', {
            title: `Critique`,
//            person,
         });

    });
    app.get('/contact', (req, res)=> {
        //const person = people.profiles.find(p => p.id === req.query.id);
        res.render('contact', {
            title: `contact`,
//            person,
         });

    });
    app.get('/about', (req, res)=> {
        //const person = people.profiles.find(p => p.id === req.query.id);
        res.render('about', {
            title: `About`,
//            person,
         });

    });

const server = app.listen(process.env.PORT || 7000, () =>{
    console.log(`Express running -> PORT ${server.address().port}`);
});