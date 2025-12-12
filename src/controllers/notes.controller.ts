import express, { Request, Response } from 'express';
import { createNote, getNotes, deleteNote, updateNote, toggleFavorite } from '../services/notes.service.js';

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

export async function updateNoteController(req: Request, res: Response) {
    if (!req.params.noteId) return res.status(401).json({
        success: false,
        message: "No id provided",
        data: null
    })
    const updatedNote = await updateNote(req.params.noteId as string, req.body)

    res.json({
        success: true,
        message: "Note update successfully",
        data: updatedNote
    })
}

export async function deleteNoteController(req: Request, res: Response) {
    if (!req.params.noteId) return res.status(401).json({
        success: false,
        message: "No id provided",
        data: null
    })
    const note = await toggleFavorite(req.params.noteId as string)

    res.json({
        success: true,
        message: "Note deleted successfully",
        data: note
    })
}

export async function toggleFavoriteController(req: Request, res: Response) {
    if (!req.params.noteId) return res.status(401).json({
        success: false,
        message: "No id provided",
        data: null
    })
    const updatedNote = await toggleFavorite(req.params.noteId as string)

    res.json({
        success: true,
        message: "Note is " + (updatedNote.favorite ? 'added' : 'removed') + " favorite.",
        data: updatedNote
    })
}