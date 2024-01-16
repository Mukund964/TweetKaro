import { model } from 'mongoose';
import {commentRepository} from '../repository/commentRepository.js';
import {TweetRepository} from '../repository/tweetRepository.js'

class commentService{
    constructor(){
        this.commentRepo = new commentRepository();
        this.tweetRepo = new TweetRepository();
    }
    async createComment(modelId,modelType,userId,content){
        try {

            if(modelType=='Tweet'){
                var commentable = await this.tweetRepo.find(modelId);
            }else if(modelType =='Comment'){
                
                commentable = await this.commentRepo.find(modelId);
            }else{
                throw {error : "Unknow Type"};
            }
            let newComment=await this.commentRepo.create({
                content : content,
                userId : userId,
                commentable : commentable.id,
                onModel:modelType,
                comments: []
            });
            commentable.comments.push(newComment);
            await commentable.save();
            return newComment;
        } catch (error) {
            throw error;
        }
    }
}

export default commentService;