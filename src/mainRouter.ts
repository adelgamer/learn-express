import express from 'express';
import notesRouter from './modules/notes/notes.route.js';
import attachmentsRouter from './modules/attachments/attachments.route.js';

const mainRouter = express.Router();

mainRouter.use('/notes', notesRouter);
mainRouter.use('/attachments', attachmentsRouter);

export default mainRouter;
