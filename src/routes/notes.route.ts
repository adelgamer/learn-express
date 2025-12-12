import express from 'express';
import { createNoteController, getNotesController } from '../controllers/notes.controller.js';
const router = express.Router();

router.get('/', getNotesController);
router.post('/', createNoteController);

export default router;
