import { Request, Response } from "express";
import { createAttachment, deleteAttachment } from "./attachments.service.js";
import { BadRequestExcpetion } from "../../../core/errors/BadRequestException.js";

export async function createAttachmentController(req: Request, res: Response) {

    if (!req.files || req.files?.length === 0) {
        throw new BadRequestExcpetion('No images provided');
    }
    const files = req.files as Express.Multer.File[];;
    const paths = files.map((file) => file.path);

    const note = await createAttachment(req.params.noteId, paths);
    res.send({
        success: true,
        message: "Attachement created successfully",
        data: note
    })
}

export async function deleteAttachmentController(req: Request, res: Response) {
    const note = await deleteAttachment(req.params.attachmentId);
    res.send({
        success: true,
        message: "Attachement deleted successfully",
        data: note
    })
}
