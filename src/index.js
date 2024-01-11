import express from 'express';
import config from './config/config.js';
import {connect} from './config/database.js'
import bodyParser from 'body-parser';
import apiRoutes from './Routes/index.js'
import {likeService} from './services/likeService.js';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const likeservice = new likeService();
const PORT = config.PORT;
app.listen(PORT,async ()=>{
    await connect();
    await likeservice.toggle('659c2a5e96713dc0098a87a8','tweet','659edffb9e1007ce6995664e');
    app.use('/api',apiRoutes);
    console.log(`server is running at ${PORT}`);
});