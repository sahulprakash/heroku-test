const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
// var hbs = require('express-handlebars')
const api = require('./server/api')
const port = 3000
const app = express();
var cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.engine('hbs', hbs({
//     extname: 'hbs', defaultLayout: 'Layout',
//     layoutsDir: __dirname + '/views/Layouts/'
// }))
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'hbs')

app.use('/api', api)

app.get('/', (req, res) => {
    res.render('home',{
                                                                                                    
    })

})
app.listen(port, function () {
    console.log('listening at port 3000!!!')
})
