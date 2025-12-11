import express, { Request, Response } from 'express';
import { createTask, getTasks } from '../services/tasks.service';

export function getTasksController(req: Request, res: Response) {
    res.send(getTasks())
}

export async function createTaskController(req: Request, res: Response) {
    const task = await createTask(req.body);
    res.send({
        success: true,
        message: "Task created successffully",
        data: task
    })
}
