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
import { checkSchema } from 'express-validator';
import { createNoteValidationSchema } from '../validators/create-note.validation.js';
import { updateNoteValidationSchema } from '../validators/update-note.validation.js';

router.get('/', getNotesController);
router.post('/', checkSchema(createNoteValidationSchema), createNoteController);
router.patch('/:noteId', checkSchema(updateNoteValidationSchema), updateNoteController)
router.delete('/:noteId', deleteNoteController)
router.put('/:noteId/toggle-favorite', toggleFavoriteController)
router.put('/:noteId/toggle-archive', toggleArchiveController)

export default router;
