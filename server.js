const express = require('express');
const app = express();
const PORT = 3000

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('website')
})

app.get('/web', (req, res) => {
    res.render('web')
})


app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
})