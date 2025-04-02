const express = require('express'); 
const app = express(); 

app.use(express.static('designs'));

app.set('view engine', 'ejs') 

app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    
    const blogs = [     
        {title: 'CSDC105 ', snippet: 'Trends in Application Development'},
        {title: 'RestAPI', snippet: 'I need Rest'},
        {title: 'Finals', snippet: 'Ilan Score ko sir?'},
    ];

    res.render('index', {title: "Home", blogs})
})

app.get('/about', (req,res) => {
    res.render('about', {title: "About"})
})

app.get('/about-us', (req,res) => {
    res.redirect('/about')
})

app.get('/blogs/create', (req,res) => {
    res.render('create', {title: "Create"})
})
app.post('/blogs', (req, res) => {
    console.log(req.body); 
    res.redirect('/');
})

app.use((req,res) => {
    res.status(404).render('404', {title: "404"})
})

app.listen(3000, () => {
   console.log('Server is running on port 3000');
});