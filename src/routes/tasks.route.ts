import express, { Request, Response } from 'express';
import { getTasksController } from '../controllers/tasks.controller';
const router = express.Router();

router.get('/', getTasksController);

export default router;
