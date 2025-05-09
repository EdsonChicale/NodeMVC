/**Core modules
 * http- lunching a server, sending requests and stuff
 * https- Adds ssl
 * fs
 * path
 * os
 * Installing production dependency we add --save
 */

//const http = require("http"); /**this is how we import */

const express = require('express');
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars')
const path = require('path')
const errorController = require('./controllers/error')

const app = express()

app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' }));
 //app.set('view engine', 'pug');
 //app.set('view engine', 'hbs');
 app.set('view engine', 'ejs');
 app.set('views', 'views')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');



app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes );
app.use(shopRoutes);


app.use(errorController.get404)



app.listen(3000)
