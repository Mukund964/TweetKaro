import {TweetRepository} from '../../src/repository/tweetRepository.js';
import tweet from '../../src/models/tweet.js';

jest.mock('../../src/models/tweet.js');

describe('Creating Tweet Tests', ()=> {
    test('creating tweet', async ()=>{
        const data = {
            content : 'Testing Tweet'
        };
        const spy = jest.spyOn(tweet , 'create').mockImplementation(()=>{
            return {...data, createdAt : '2024-03-02',updatedAt : '2024-03-02'};
        })
        const tweetRepo = new TweetRepository();
        const Tweet = await tweetRepo.Create(data);
        expect(spy).toHaveBeenCalled();
        expect(Tweet.content).toBe('Testing Tweet');
    });

    test('while creating tweet it throws exception',async()=>{
        const data = {
            content : 'Testing Tweet'
        };
        jest.spyOn(tweet,'create').mockImplementation(()=>{
            return new Error('something went wrong');
        });
        const tweetRepo = new TweetRepository();
        const Tweet = await tweetRepo.Create(data);
            //expect(Tweet).toThrow(err); -- check that it throws the error
            expect(Tweet).toBeInstanceOf(Error);
            expect(Tweet.message).toBe('something went wrong'); // check for error message to match
    });

});
