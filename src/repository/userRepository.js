import user from "../models/user.js";
import CrudRepository from './CrudRepository.js';

class UserRepository extends CrudRepository{
    constructor(){
        super(user);
    }

    async findBy(data){
        try {
            const res = await user.findOne(data);
            return res;
        } catch (error) {
            throw error;
        }
    }
}

export default UserRepository;