require('dotenv').config();
const express = require('express');
const app = express();  
const hbs = require('hbs')
const port = process.env.PORT;

//Servir contenido estatico: 
app.use(express.static('public'));

//Handlebars CONFIG: 
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials')


app.get('/generic',(req,res)=>{
    res.render('generic', {
        nombre:'Indumentaria',
        titulo:'Vetina'
    })
})

app.get('/home',(req,res)=>{
    res.render('home', {
        nombre:'Indumentaria',
        titulo:'Vetina'
    })
})

app.get('/elements',(req,res)=>{
    res.render('elements') 
})

app.get('*',(req,res)=>{
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port,()=>{
    console.log(`Example app listening http://localhost:${port}`);
}); 
