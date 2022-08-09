const express = require ('express');
const router = express.Router();
const {about} = require('../controllers/aboutController');

/* /about */

router.get('/about', about);


module.exports = router;