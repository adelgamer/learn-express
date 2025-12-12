import prisma from "../prismaClient/prismaClient.js";
import type { Note } from "../../generated/prisma/client.js";


export function getNotes() {
    return 'Notes and Adel got paid 10 millions ' + new Date()
}

export async function createNote(note: Note) {
    const createdNote = await prisma.note.create({
        data: note
    });
    return createdNote;
}
