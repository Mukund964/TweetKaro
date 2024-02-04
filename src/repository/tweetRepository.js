import tweet from '../models/tweet.js';

class TweetRepository{
    async Create(data){
        try {
            const response = await tweet.create(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async find(id){
        try {
            const Tweet = tweet.findById(id).populate({path : 'likes'});
            return Tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getTweetWithComments(id){
        try {
            const Tweet = await tweet.findById(id).populate({path : 'comments'}).lean();
            return Tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async remove(id){
        try {
            const res = await tweet.deleteOne(id);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async getTweetsLimits(offset,limit){
        try {
            const Tweets = await tweet.find().skip(offset).limit(limit);
            return Tweets;
        } catch (error) {
            console.log(error);;
        }
    }
}

export {TweetRepository};