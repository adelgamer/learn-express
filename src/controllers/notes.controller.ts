import express, { Request, Response } from 'express';
import { createNote, getNotes, deleteNote, updateNote, toggleFavorite, toggleArchive } from '../services/notes.service.js';

export async function getNotesController(req: Request, res: Response) {
    const notes = await getNotes();
    res.send({
        success: true,
        message: "Notes retreived successfully",
        data: notes
    })
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
    const note = await deleteNote(req.params.noteId as string)

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
        message: `Note is ${updatedNote.favorite ? 'added to' : 'removed from'} favorite.`,
        data: updatedNote
    })
}

export async function toggleArchiveController(req: Request, res: Response) {
    if (!req.params.noteId) return res.status(401).json({
        success: false,
        message: "No id provided",
        data: null
    })
    const updatedNote = await toggleArchive(req.params.noteId as string)

    res.json({
        success: true,
        message: `Note is ${updatedNote.archivedAt ? 'added to' : 'removed from'} archive.`,
        data: updatedNote
    })
}