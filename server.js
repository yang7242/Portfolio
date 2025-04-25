const express = require('express');
const path = require('path');
const app = express();

app.set('views', 'public/Template');
app.set('view engine', 'pug');

const port = process.env.PORT || 4000 
app.use('/public', express.static(path.join(__dirname, 'public')));
const { list } = require('./public/Extra/projectlist.js');

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
    res.render('Projects.pug', {list : list});
});

app.get('/Projects/:name', (req, res) =>{
    const name = req.params.project;
    let project = {};
    for (let item of list) {
        if (item.project === name){
            project = item;
        }
    }
    if (project == {}){
        return res.redirect('/404');
    }
    
    res.render('Project.pug', {list : list});
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