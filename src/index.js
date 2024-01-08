import express from 'express';
import config from './config/config.js';
import {connect} from './config/database.js'
const app = express();

const PORT = config.PORT;
app.listen(PORT,async ()=>{
    await connect();
    console.log(`server is running at ${PORT}`);
});