import express, { Request, Response } from 'express';
import { createTaskController, getTasksController } from '../controllers/tasks.controller';
const router = express.Router();

router.get('/', getTasksController);
router.post('/', createTaskController);

export default router;
