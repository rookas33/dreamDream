const express = require('express');
const router = express.Router();

const MainController = require('../controllers/mainpage.controller')
const mainController = new MainController(); 

router.post('/auth', mainController.login);


module.exports = router;