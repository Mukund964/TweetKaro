import CrudRepository from './CrudRepository.js';
import like from '../models/like.js';

class likeRepository extends CrudRepository{
    constructor(){
        super(like);
    }

    async findUserAndLikeable(userId,onModelId,likeable){
        try {
            const res = await like.find(
                
                    userId,
                    likeable,
                    onModelId
                
            );
            return res;
        } catch (error) {
            console.log(error);
        }
    }
}

export default likeRepository;