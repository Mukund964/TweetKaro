import commentRepository from "../repository/commentRepository.js";
import tweetRepository from "../repository/tweetRepository.js"

class commentService{
    constructor(){
        this.commentRepo = new commentRepository();
        this.tweetRepo = new tweetRepository();
    }
    async createComment(modelId,modelType,userId,content){
        try {
            if(modelType=='Tweet'){
                var commentable = await this.tweetRepo.find(modelId);
            }else if(modelType =='Comment'){
                commentable = await this.commentRepo.get(modelId);
            }else{
                throw {error : "Unknow Type"};
            }
            let newComment=await this.commentRepo.create({
                content : content,
                userId : userId,
                commentable : commentable.id,
                modelType:modelType,
            });
            return newComment;
        } catch (error) {
            throw error;
        }
    }
}

export default commentService;