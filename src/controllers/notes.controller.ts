import express, { Request, Response } from 'express';
import { createNote, getNotes } from '../services/notes.service.js';

export function getNotesController(req: Request, res: Response) {
    res.send(getNotes())
}

export async function createNoteController(req: Request, res: Response) {
    const note = await createNote(req.body);
    res.send({
        success: true,
        message: "Note created successfully",
        data: note
    })
}
