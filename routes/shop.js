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
    res.render('shop', {prods: products,docTitle: 'Shop' });
});

router.get('/services', (req, res, next) => {
    res.render('services', {docTitle: 'Services' });
});

router.get('/about-us', (req, res, next) => {
    res.render('about', {docTitle: 'About' });
});

router.get('/facts', (req, res, next) => {
    res.render('faqs', {docTitle: 'FAQs' });
});

module.exports = router;