import mongoose from "mongoose";
import bcrypt from 'bcrypt';    
const userSchema = new mongoose.Schema({
    email :{
        type : String,
        required : true
    },
    password : {
        type : String,
        required: true
    },
    name : {
        type : String,
        required : true
    }
},{timestamps:true});

userSchema.pre('save',async function(next){
    const user = this;
    const salt = await bcrypt.genSalt(10); 
    user.password = await bcrypt.hash(user.password, salt);
    next();
})

userSchema.methods.comparePassword = function compare(password){
    return bcrypt.compareSync(password,this.password);
}

const user = mongoose.model('User',userSchema);
export default user;