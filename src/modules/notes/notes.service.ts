import prisma from "../../../core/databaseClient/prismaClient/prismaClient.js";
import type { Note } from "../../../generated/prisma/client.js";
import { NotFoundExcpetion } from "../../../core/errors/NotFoundExcpetion.js";


export async function getNotes() {
    const notes = await prisma.note.findMany({});
    return { count: notes.length, notes };
}

export async function createNote(note: Note) {
    const createdNote = await prisma.note.create({
        data: note
    });
    return createdNote;
}

export async function deleteNote(noteId: string) {
    const note = await prisma.note.findUnique({
        where: {
            id: noteId
        }
    })
    if (!note) throw new NotFoundExcpetion('Note not found');


    const deletedNote = await prisma.note.delete({
        where: {
            id: noteId
        }
    });
    return deletedNote;
}

export async function updateNote(noteId: string, data: Note) {
    const note = await prisma.note.findUnique({
        where: {
            id: noteId
        }
    })
    if (!note) throw new NotFoundExcpetion('Note not found');

    const updatedNote = await prisma.note.update({
        where: {
            id: noteId
        },
        data: {
            title: data.title,
            content: data.content,
            privacy: data.privacy,
            favorite: data.favorite,
            status: data.status
        }
    });
    return updatedNote;
}

export async function toggleFavorite(noteId: string) {

    // 1- Check if note exists
    const note = await prisma.note.findUnique({
        where: {
            id: noteId
        }
    })
    if (!note) throw new NotFoundExcpetion('Note not found');


    const updatedNote = await prisma.note.update({
        where: {
            id: noteId
        },
        data: {
            favorite: !note.favorite,
        }
    });

    return updatedNote;
}

export async function toggleArchive(noteId: string) {

    // 1- Check if note exists
    const note = await prisma.note.findUnique({
        where: {
            id: noteId
        }
    })
    if (!note) throw new NotFoundExcpetion('Note not found');


    const updatedNote = await prisma.note.update({
        where: {
            id: noteId
        },
        data: {
            archivedAt: note.archivedAt ? null : new Date(),
        }
    });

    return updatedNote;
}
