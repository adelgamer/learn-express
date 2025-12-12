import express from 'express';
import {
    createNoteController,
    deleteNoteController,
    getNotesController,
    updateNoteController,
} from '../controllers/notes.controller.js';
const router = express.Router();

router.get('/', getNotesController);
router.post('/', createNoteController);
router.patch('/:noteId', updateNoteController)
router.delete('/:noteId', deleteNoteController)

export default router;
