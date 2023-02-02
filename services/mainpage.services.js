const MainRepository = require('../repositories/mainpage.repository');

class MainService {

    mainRepository = new MainRepository(); 

    // 로그인 
    
    login = async (nickname, password) => {
        try {
            const user = await this.mainRepository.login(nickname, password);
            if (user) {
                return user; 
            } else {
                return 0; 
            }
        } catch (err) {
            throw err; 
        }
    }; 

    // 더미 고객 회원가입
    customerSignUp = async () => {
        const customerSignUp = await mainRepository.customerSignUp(
            customerId,
            name,
            password,
            email,
            point
        );

        return {
            customerId: customerSignUp.customerId,
            name: customerSignUp.name,
            password: customerSignUp.password,
            email: customerSignUp.email,
            point: customerSignUp.point,
        };
    }

}

module.exports = MainService; 