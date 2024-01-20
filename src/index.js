import express from 'express';
import config from './config/config.js';
import {connect} from './config/database.js'
import bodyParser from 'body-parser';
import apiRoutes from './Routes/index.js'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const PORT = config.PORT;
app.listen(PORT,async ()=>{
    await connect();
    app.use('/api',apiRoutes);
    console.log(`server is running at ${PORT}`);
});