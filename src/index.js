import express from 'express';
import config from './config/config.js';
import {connect} from './config/database.js'
import bodyParser from 'body-parser';
import apiRoutes from './Routes/index.js'
import commentService from './services/commentService.js';
const app = express();
const comment = new commentService();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const PORT = config.PORT;
app.listen(PORT,async ()=>{
    await connect();
    //await comment.createComment('65a3aaadc887942305f59c5e','Comment','659edffb9e1007ce6995664e','Nice');
    app.use('/api',apiRoutes);
    console.log(`server is running at ${PORT}`);
});