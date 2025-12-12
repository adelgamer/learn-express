import express, { Request, Response } from 'express';
import { createAttachementController } from '../controllers/attachments.controller.js';
import multyPart from '../../core/multer/multerIntance.js';

const attRouter = express.Router();


attRouter.post('/', multyPart.single('image'), (req: Request, res: Response) => createAttachementController(req, res))

export default attRouter;