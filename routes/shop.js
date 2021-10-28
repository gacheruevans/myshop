/***
 * Author Evans Gacheru Munene
 */
const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

router.get('/services', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'services.html'));
});

router.get('/about-us', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'about.html'));
});

router.get('/facts', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'facts.html'));
});

module.exports = router;