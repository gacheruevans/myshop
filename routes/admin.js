/***
 * Author Evans Gacheru Munene
 */
const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const products = [];
const users = [];

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {docTitle: 'Add Product' });
});

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title} );
    res.redirect('/');
});

router.get('/add-user', (req, res, next) => {
    users.push({ name: req.body.name} );
    res.render('add-user', {docTitle: 'Add User' });
});

router.post('/register', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
exports.users = users;