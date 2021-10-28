/***
 * Author Evans Gacheru Munene
 * Node Js Server file.
 */
const path = require('path');

const express = require('express');

const rootDir = require('./utils/path');

const app = express();

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {docTitle: '404' });
});
app.listen(3000);