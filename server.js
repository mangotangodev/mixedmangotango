const express = require('express');
const app = express();
const PORT = 3000

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

app.get('/', (req, res) => {
    res.render('website')
})

app.get('/web', (req, res) => {
    res.render('web')
})


app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
})