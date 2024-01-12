import likeRepository from '../repository/likeRepository.js';
import {TweetRepo} from '../repository/index.js';

// const likeRepo = new likeRepository();
// const tweetRepository = new TweetRepo(); 
class likeService{
    constructor(){
        this.likeRepository = new likeRepository();
        this.tweetRepository = new TweetRepo();
    }

    async toggle(modelId,modelType,userId){
        
        if(modelType=="tweet"){
            var likeable = await this.tweetRepository.find(modelId);  // this func only works on mongoose object (populate({path}) not on js object mongoose object ->> takes time in conversion : 'likes'});
            //console.log(likeable);
        }else if(modelType == "comment"){

        }else{
            throw {error : "Unknow modelType"};
        }
        const exist = await this.likeRepository.findUserAndLikeable({
            user : userId,
            onModel : modelType,
            likeable: modelId
        });
        var isAdded;
        if(exist.length > 0){
            likeable.likes.pull(exist[0].id);
            await likeable.save();
            await this.likeRepository.remove(exist[0].id);
            isAdded = false;
        }
        else{
            await this.likeRepository.create({
                user : userId,
                onModel : modelType,
                likeable : likeable.id
            });
            isAdded = true;
        }
        console.log(isAdded);
        return isAdded;
    }
}

export {likeService};