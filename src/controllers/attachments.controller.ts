import { Request, Response } from "express";
import { createAttachement } from "../services/attachements.service.js";

export async function createAttachementController(req: Request, res: Response) {
    // const validation = validationResult(req);
    // if (!validation.isEmpty()) throw new BadRequestExcpetion('Error in the data sent', validation);

    const note = await createAttachement();
    res.send({
        success: true,
        message: "Attachement created successfully",
        data: note
    })
}