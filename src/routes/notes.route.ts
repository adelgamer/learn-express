import express from 'express';
import {
    createNoteController,
    deleteNoteController,
    getNotesController,
} from '../controllers/notes.controller.js';
const router = express.Router();

router.get('/', getNotesController);
router.post('/', createNoteController);
router.delete('/:noteId', deleteNoteController)

export default router;
