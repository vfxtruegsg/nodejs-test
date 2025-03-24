import { Router } from 'express';
import studentsRouter from './students.js';
import authRouter from './auth.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use('/students', authenticate, studentsRouter);
router.use('/auth', authRouter);

export default router;
