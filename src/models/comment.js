import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    content: {
        type : String,
        required :true
    },
    userId :{
        type: String
    },
    onModel:{
        type : String,
        required:true,
        Enum : ['tweet','comment']
    },
    commentable:{
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        refPath  : "onModel"
    },
    comments:[{
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'comment'
    }]
},{timestamps:true});

const comment = mongoose.model('Comment',commentSchema);
export default comment;
