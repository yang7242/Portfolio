const express = require('express');
const path = require('path');
const app = express();

app.set('views', 'public/Template');
app.set('view engine', 'pug');

const port = process.env.PORT || 4000 
app.use('/public', express.static(path.join(__dirname, 'public')));
const { list } = require('./public/Extra/projectlist.js');
const { certlist } = require('./public/Extra/certlist.js');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/Home', (req, res) =>{
    res.render('home.pug', {list : list, certlist : certlist});
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

app.get('/Projects/:project', (req, res) =>{
    const name = req.params.project;
    let project = {};
    for (let item of list) {
        if (item.project === name){
            project = item;
        }
    }
    if (Object.keys(project).length === 0){
        return res.redirect('/404');
    }
    
    res.render('Project.pug', {q : project});
});

app.get('/Certifications', (req, res) =>{
    res.render('Certifications.pug');
});

app.get('/WorkTimeline', (req, res) =>{
    res.render('Timeline.pug');
});

app.get('/404', (req, res) =>{
    res.render('404.pug');
});

app.use((req, res, next)=>{
    res.status(404).render('404.pug');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});