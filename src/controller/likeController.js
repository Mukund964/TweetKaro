import {likeService} from '../services/likeService.js';
const like = new likeService();
export const toggleLike = async(req,res)=>{
    try {
        const response = await like.toggle(req.query.modelId,req.query.modelType,req.body.userId);
        return res.status(200).json({
            message : 'Like Toggled succesfully',
            error : {},
            data : response,
            success : true
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            err: error,
            success: false,
            data :{},
            message : " something error occured"
        });

    }
} 