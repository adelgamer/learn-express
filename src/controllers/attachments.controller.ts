import { Request, Response } from "express";
import { createAttachement, deleteAttachement } from "../services/attachements.service.js";
import { BadRequestExcpetion } from "../../core/errors/BadRequestException.js";

export async function createAttachementController(req: Request, res: Response) {

    if (!req.files || req.files?.length === 0) {
        throw new BadRequestExcpetion('No images provided');
    }
    const files = req.files as Express.Multer.File[];;
    const paths = files.map((file) => file.path);

    const note = await createAttachement(req.params.noteId, paths);
    res.send({
        success: true,
        message: "Attachement created successfully",
        data: note
    })
}

export async function deleteAttachementController(req: Request, res: Response) {
    const note = await deleteAttachement(req.params.attachmentId);
    res.send({
        success: true,
        message: "Attachement deleted successfully",
        data: note
    })
}