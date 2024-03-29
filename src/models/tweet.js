import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content : {
        type: String,
        required: true,
        max :[250, 'Exceeded the word limit']
    },
    hashtags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hashtag'
    }],
    likes :[{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Like'
    }],
    comments:[{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Comment'
    }],
    image:{
        type: String
    }
},{timestamps:true});
const tweet = mongoose.model('Tweet',tweetSchema);

export default tweet;