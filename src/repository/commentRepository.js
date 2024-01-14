import CrudRepository from './CrudRepository.js';
import comment from '../models/comment.js'

export class commentRepository extends CrudRepository {
    constructor() {
        super(comment);
    }

    async find(id){
        try {
            return comment.findById(id).populate({path : 'comments'});
        } catch (error) {
            throw {error};
        }
    }
}

