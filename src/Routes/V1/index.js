import express from 'express';
import {Create} from '../../controller/tweetController.js';
import { toggleLike } from '../../controller/likeController.js';
const router = express.Router();


router.post('/tweets', Create);
router.post('/likes/toggle',toggleLike);

export default router;