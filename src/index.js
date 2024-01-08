import express from 'express';
import config from './config/config.js';
import {connect} from './config/database.js'
import {TweetRepository} from './repository/tweetRepository.js'
const app = express();
const tweetRepo = new TweetRepository();
const PORT = config.PORT;
app.listen(PORT,async ()=>{
    await connect();
    await tweetRepo.Create({
        content : "First Tweet"
    });
    console.log(`server is running at ${PORT}`);
});