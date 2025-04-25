const express = require('express');
const path = require('path');
const app = express();

app.set('views', 'public/Template');
app.set('view engine', 'pug');

const port = 7242;
app.use('/public', express.static(path.join(__dirname, 'public')));
// app.use('/public', express.static('public/Audio'));
// app.use('/public', express.static('public/CSS'));
// app.use('/public', express.static('public/Images'));
// app.use('/public', express.static('public/Javascript'));
// app.use('/public', express.static('public/Template'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/Home', (req, res) =>{
    res.render('home.pug');
});

app.get('/', (req, res) =>{
    res.redirect('/Home');
});

app.get('/AboutMe', (req, res) =>{
    res.render('AboutMe.pug');
});

app.get('/Education', (req, res) =>{
    res.render('Education.pug');
});

app.get('/Projects', (req, res) =>{
    res.render('Projects.pug');
});

app.get('/Certifications', (req, res) =>{
    res.render('Certifications.pug');
});

app.get('/WorkTimeline', (req, res) =>{
    res.render('Timeline.pug');
});

app.use((req, res, next)=>{
    res.status(404).render('404.pug');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});