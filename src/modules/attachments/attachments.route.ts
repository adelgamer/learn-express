import express, { Request, Response } from 'express';
import { createAttachmentController, deleteAttachmentController } from './attachments.controller.js';
import instanciateMulter from '../../../core/multer/multerIntance.js';

const attRouter = express.Router();

const upload = instanciateMulter('./uploads')

attRouter.post('/:noteId', upload.array('images'), (req: Request, res: Response) => createAttachmentController(req, res))
attRouter.delete('/:attachmentId', (req: Request, res: Response) => deleteAttachmentController(req, res))

export default attRouter;
