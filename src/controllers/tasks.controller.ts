import express, { Request, Response } from 'express';
import { getTasks } from '../services/tasks.service';

export function getTasksController(req: Request, res: Response) {
    res.send(getTasks())
}