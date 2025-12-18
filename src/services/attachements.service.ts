import prisma from "../../core/databaseClient/prismaClient/prismaClient.js";
import { NotFoundExcpetion } from "../../core/errors/NotFoundExcpetion.js";
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

export async function deleteAttachement(attachmentId: string) {
    // 1- Check if attachement exists
    const attachement = await prisma.attachement.findUnique({
        where: {
            id: attachmentId
        }
    })
    if (!attachement) throw new NotFoundExcpetion('Attachement does not exists');

    // 2- Delete the attachement
    await prisma.attachement.delete({
        where: {
            id: attachmentId
        }
    })

    return attachement;
}