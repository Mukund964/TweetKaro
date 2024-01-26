import UserRepository from '../repository/userRepository.js';

class userService{
    constructor(){
        this.userRepo = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepo.create(data);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async findByEmail(email){
        try {
            const user = await this.userRepo.findBy({email});
            return user;
        } catch (error) {
            throw error;            
        }
    }

    async login(data){
        try {
            const user = await this.findByEmail(data.email);
            if(!user){
                return {
                    message : 'User not Found'
                }
            }
            if(!user.comparePassword(data.password)){
                return {
                    message : 'Incorrect Password'
                }
            }
            const token = user.generateJwt();
            return token;
        } catch (error) {
            throw error;
        }
    }
}

export default userService;