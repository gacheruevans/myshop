/***
 * Author Evans Gacheru Munene
 */
const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {prods: products, pageTitle: 'Shop'});
});

router.get('/services', (req, res, next) => {
    res.render('services', {pageTitle: 'Services', path: '/services'});
});

router.get('/about-us', (req, res, next) => {
    res.render('about', {pageTitle: 'About', path: '/about-us'});
});

router.get('/facts', (req, res, next) => {
    res.render('faqs', {pageTitle: 'FAQs', path: '/facts'});
});

module.exports = router;