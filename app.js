/* const express = require('express')
const slugify = require('slugify')
const products_routes = require('./routes/products.js')

//Server instantiation
const app = express()

//Server configuration: template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('/views'));

//Midleware
app.use(express.json())
app.use('/', products_routes)

//Server startup
app.listen(5000, () => {
    console.log('server is listening on port 5000')
})


 */

const express = require('express');
const slugify = require('slugify');
const products_routes = require('./routes/products.js');

// Server instantiation
const app = express();

// Server configuration: template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('/views'));

// Middleware
app.use(express.json());
app.use('/', products_routes);

// Slugify welcome message
const welcomeMessage = "Bienvenido al servidor Express";
const slugMessage = slugify(welcomeMessage, { replacement: '*', lower: true });

// Root route with slugified message
app.get('/', (req, res) => {
    res.send(`Mensaje slugizado: ${slugMessage}`);
});

// Server startup
app.listen(5000, () => {
    console.log(`Servidor corriendo en http://localhost:5000`);
});
