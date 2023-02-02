const express = require('express');
const router = express.Router();

const MainController = require('../controllers/mainpage.controller')
const mainController = new MainController();

// 임시 테스트 회원가입 구현 
router.post('/test/signUp', mainController.customerSignUp); 



module.exports = router;