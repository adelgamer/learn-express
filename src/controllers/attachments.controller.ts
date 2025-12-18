import { Request, Response } from "express";
import { createAttachement } from "../services/attachements.service.js";
import { BadRequestExcpetion } from "../../core/errors/BadRequestException.js";

export async function createAttachementController(req: Request, res: Response) {
    // const validation = validationResult(req);
    // if (!validation.isEmpty()) throw new BadRequestExcpetion('Error in the data sent', validation);
    // if (req.file) {
    //     fs.writeFileSync('../../uploads/images/' + req.file.originalname, req.file.buffer);
    // }

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