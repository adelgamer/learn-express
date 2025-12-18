import prisma from "../../core/databaseClient/prismaClient/prismaClient.js";
import { AttachementType } from "../../generated/prisma/enums.js";

export async function createAttachement(noteId: string, filePaths: string[]) {

    const notes = filePaths?.map((path) => ({
        noteId: noteId,
        type: AttachementType.IMAGE,
        path: path
    }))

    const note = await prisma.attachement.createMany(
        {
            data: notes
        }
    );

    return note;
}