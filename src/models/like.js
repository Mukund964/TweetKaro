import mongoose from 'mongoose';
const likeSchema = new mongoose.Schema({
    onModel:{
        type : String,
        required:true,
        Enum : ['tweet','comment']
    },
    likeable :{
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        refPath  : "onModel"
    },
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
},{timestamps : true});

const Like = mongoose.model('Like',likeSchema);
export default Like;