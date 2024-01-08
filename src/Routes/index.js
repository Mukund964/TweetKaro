import express from 'express';
import V1ApiRoutes from './V1/index.js';
const router = express.Router();


router.use('/v1',V1ApiRoutes);

export default router;