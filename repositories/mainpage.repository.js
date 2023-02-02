const {customer} = require('../models');

class MainRepository{

    login = async (nickname, password) => {
        try{
            const user = await this.customer.findOne({
                where: {nickname, password}
            }); 
            return user; 
        } catch(error){
            throw new Error(error);
        }
    }; 
    
    customerSignUp = async (
        nickname,
        name,
        password,
        email,
        point
        ) => {
            try{
                const customerSignIn = await customer.create({
                    nickname,
                    name,
                    password,
                    email,
                    point,       
                });
                return customerSignIn; 
            } catch(error) {
                throw new Error(error);
            }
        };




}

module.exports = MainRepository;