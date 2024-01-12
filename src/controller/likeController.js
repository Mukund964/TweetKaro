import {likeservice} from '../services/likeService.js';

export const toggleLike = async(req,res)=>{
    try {
        const res = await likeservice.toggleLike(req.param.modelId,req.params.modelType,req.body.userId);
        return res.send(200).json({
            message : 'Like Toggled succesfully',
            error : {},
            content : res,
            success : true
        });
    } catch (error) {
        res.send(400).json({
            err: error,
            success: false,
            message : " something error occured"
        });

    }
} 