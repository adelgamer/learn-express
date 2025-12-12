import express from 'express';
import {
    createNoteController,
    deleteNoteController,
    getNotesController,
    updateNoteController,
    toggleFavoriteController,
    toggleArchiveController,
} from '../controllers/notes.controller.js';
const router = express.Router();

router.get('/', getNotesController);
router.post('/', createNoteController);
router.patch('/:noteId', updateNoteController)
router.delete('/:noteId', deleteNoteController)
router.put('/:noteId/toggle-favorite', toggleFavoriteController)
router.put('/:noteId/toggle-archive', toggleArchiveController)

export default router;
