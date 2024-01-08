import {TweetService} from '../services/tweetService.js';

const tweet = new TweetService();
export const Create = async (req,res) => {
    try {
        const result = await tweet.create(req.body);
        return res.status(201).json({
            message: "Tweet created successfully",
            data : result,
            success : true,
            err : {}
        });
    } catch (error) {
        return res.status(201).json({
            message : "Error in creating Tweet",
            data : {},
            success : false,
            err : {error}
        });
    }
}