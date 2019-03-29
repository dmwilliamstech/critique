const express = require('express');
const app = express();

//Set PUG as view engine
app.set('view engine', 'pug');

//Server static files from the public folder
app.use(express.static(__dirname + '/public'));

//Set Home route
app.get('/', (req, res)=> {
    res.render('critique', {
        title: `Critique`,
    });
});

    app.get('/contact', (req, res)=> {
        res.render('contact', {
            title: `contact`,
        });
    });
    
    app.get('/about', (req, res)=> {
        res.render('about', {
            title: `About`,
         });
         
    });
    
    app.get('/food_blog', (req, res)=> {
        res.render('food_blog', {
            title: `Food Blog`,
        });
    });    
    app.get('/hair_blog', (req, res)=> {
        res.render('hair', {
            title: `Hair Blog`,
        });     
    });

const server = app.listen(process.env.PORT || 7000, () =>{
    console.log(`Express running -> PORT ${server.address().port}`);
});