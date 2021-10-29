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
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product', adminDash: true });
});

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title} );
    res.redirect('/');
});

router.get('/add-user', (req, res, next) => {
    users.push({ name: req.body.name} );
    res.render('add-user', {pageTitle: 'Add User', path: '/admin/add-user', adminDash: true });
});

router.post('/register', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
exports.users = users;