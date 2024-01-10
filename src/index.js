import express from 'express';
import config from './config/config.js';
import {connect} from './config/database.js'
import bodyParser from 'body-parser';
import apiRoutes from './Routes/index.js'
import UserRepository from './repository/userRepository.js';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const userRepo = new UserRepository();
const PORT = config.PORT;
app.listen(PORT,async ()=>{
    await connect();
    const data = {
        'email' : 'abc@123',
        'password':'1234567890',
        'name':"admin",
    }
    const res = await userRepo.create(data);
    console.log(res);
    app.use('/api',apiRoutes);
    console.log(`server is running at ${PORT}`);
});