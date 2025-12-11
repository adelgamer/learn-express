import express, { Request, Response } from 'express';
import { getTasks } from '../controllers/tasks.controller';
const router = express.Router();

router.get('/', getTasks);

export default router;
