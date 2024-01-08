import {TweetRepo,HashtagRepo} from '../repository/index.js'

class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepo();
        this.HashtagRepository = new HashtagRepo();
    }

    async create(data){
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag)=> tag.substring(1));
        const tweet = await this.tweetRepository.Create(data);
        let alreadyPresentTags = await this.HashtagRepository.findByName(tags);
        let titleOfPresentTags = alreadyPresentTags.map((tag)=> tag.title);
        let newTags = tags.filter((tag)=> !titleOfPresentTags.includes(tag));

        newTags = newTags.map((tag) => {
            return {title : tag , tweets : [tweet.id]};
        })
        await this.HashtagRepository.CreateMany(newTags);

        alreadyPresentTags.forEach((tag) => {
            tag.tweet.push(tweet.id);
            tag.save();
        });

        return tweet;
    }
}

export {TweetService};