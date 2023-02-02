const MainService = require('../services/mainpage.services');

class MainController {

    mainService = new MainService();

    // 로그인 
    login = async (req, res, next) => {
        try {
            const {nickname, password} = req.body; 
            const user = await this.mainService.login(nickname, password);
            if (user === 0) {
                res.status(400).send({message: "아이디 또는 패스워드가 잘못됐습니다."})
            } else {
                res.status(200).send({message: "dreamdream에 오신 것을 환영합니다."});
            } 
        } catch (error) {
            next(error);
        }
    }; 

    // 임시 회원가입 
    customerSignUp = async (req,res,next) => {
        try {
            const { nickname,name,password,email} = req.body; 
            const point = 0;

            const createCustomerData = await this.mainService.customerSignUp(
                nickname,name,password,email,point
            ); 

            res.status(201).json({data: createCustomerData}); 
        } catch (error) {
            res.status(400).json({errorMessag: error.message}); 
        }
    };





}

module.exports = MainController;