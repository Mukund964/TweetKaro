import {TweetService} from '../services/tweetService.js';
import {upload} from '../middleware/imgUpload.js';

const singleUploader = upload.single('image');
const tweet = new TweetService();
export const Create = async (req,res) => {
    try {

        singleUploader(req,res,async function(err,data){
            if(err) {
                console.log(err);
                return res.status(500).json({
                    error : err
                })
            }
            //console.log(req.file);
            const payload = {...req.body};
            payload.image = req.file.location;
            const result = await tweet.create(payload);
            return res.status(201).json({
            message: "Tweet created successfully",
            data : result,
            success : true,
            err : {}
            });
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