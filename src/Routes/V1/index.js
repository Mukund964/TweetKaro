import express from 'express';
import {Create} from '../../controller/tweetController.js';
const router = express.Router();


router.post('/tweets', Create);

export default router;