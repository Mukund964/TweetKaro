import express from 'express';
import {Create} from '../../controller/tweetController.js';
import { toggleLike } from '../../controller/likeController.js';
import {create} from '../../controller/commentController.js';
import { signUp,signIn } from '../../controller/userController.js';
import {authenticate} from '../../middleware/authenticate.js';
const router = express.Router();


router.post('/signup',signUp);
router.post('/signin',signIn);
router.post('/tweets', authenticate, Create);
router.post('/likes/toggle',authenticate, toggleLike);
router.post('/comment',authenticate, create);

export default router;