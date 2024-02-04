import userService from '../services/userService.js'

const Userservice = new userService();
const signUp = async (req,res) =>{
    try {
        console.log("called");
        const user = await Userservice.create(req.body);
        return res.status(200).json({
            message : 'User registered succesfully',
            data : user,
            error : {},
            success :true 
        });
    } catch (error) {
        return res.status(500).json({
            message : 'Some error occured',
            data : {},
            error : error,
            success : false
        })
    }
}

const signIn = async (req,res)=>{
    try {
        const token = await Userservice.login(req.body);
        res.status(200).json({
            message: "Logged in successfully",
            data: token,
            error : {},
            success : true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : 'Some error occured',
            data : {},
            error : {error},
            success : false
        })
    }
}

export {signUp,signIn};