import express from 'express';
import {Create} from '../../controller/tweetController.js';
import { toggleLike } from '../../controller/likeController.js';
import {create} from '../../controller/commentController.js';
const router = express.Router();


router.post('/tweets', Create);
router.post('/likes/toggle',toggleLike);
router.post('/comment',create);

export default router;