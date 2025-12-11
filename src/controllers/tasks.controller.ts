import express, { Request, Response } from 'express';

export function getTasks(req: Request, res: Response) {
    res.send('Tasks and Adel got paid 10 millions')
}