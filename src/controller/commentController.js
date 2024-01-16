import commentService from '../services/commentService.js';
const comment = new commentService();
export const create = async(req,res)=>{
    try {
        const response = await comment.createComment(req.query.modelId,req.query.modelType,req.body.userId,req.body.content);
        return res.status(200).json({
            message : 'comment created succesfully',
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