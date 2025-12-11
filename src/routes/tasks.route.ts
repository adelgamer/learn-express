import express, { Request, Response } from 'express';
import { createTaskController, getTasksController } from '../controllers/tasks.controller.js';
const router = express.Router();

router.get('/', getTasksController);
router.post('/', createTaskController);

export default router;
