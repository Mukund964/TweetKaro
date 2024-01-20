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
}

export default userService;