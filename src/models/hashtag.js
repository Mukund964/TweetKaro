import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    tweet:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'tweet'
        }
    ]
},{timestamps:true});

const Hashtag = mongoose.model('Hashtag',tagSchema);
export default Hashtag;