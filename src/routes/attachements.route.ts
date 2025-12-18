import express, { Request, Response } from 'express';
import { createAttachementController } from '../controllers/attachments.controller.js';
import instanciateMulter from '../../core/multer/multerIntance.js';

const attRouter = express.Router();

const upload = instanciateMulter('./uploads')

attRouter.post('/:noteId', upload.array('images'), (req: Request, res: Response) => createAttachementController(req, res))

export default attRouter;