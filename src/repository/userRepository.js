import user from "../models/user.js";
import CrudRepository from './CrudRepository.js';

class UserRepository extends CrudRepository{
    constructor(){
        super(user);
    }
}

export default UserRepository;