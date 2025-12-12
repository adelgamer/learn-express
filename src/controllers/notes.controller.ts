import express, { Request, Response } from 'express';
import { createNote, getNotes, deleteNote } from '../services/notes.service.js';

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

export async function deleteNoteController(req: Request, res: Response) {
    if (!req.params.noteId) return res.status(401).json({
        success: false,
        message: "No id provided",
        data: null
    })
    const deletedNote = await deleteNote(req.params.noteId as string)

    res.json({
        success: true,
        message: "Note deleted successfully",
        data: deletedNote
    })
}