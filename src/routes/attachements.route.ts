import express, { Request, Response } from 'express';
import { createAttachementController, deleteAttachementController } from '../controllers/attachments.controller.js';
import instanciateMulter from '../../core/multer/multerIntance.js';

const attRouter = express.Router();

const upload = instanciateMulter('./uploads')

attRouter.post('/:noteId', upload.array('images'), (req: Request, res: Response) => createAttachementController(req, res))
attRouter.delete('/:attachmentId', (req: Request, res: Response) => deleteAttachementController(req, res))

export default attRouter;