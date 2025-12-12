import 'dotenv/config';
import express from 'express';
import notesRouter from './src/routes/notes.route.js';
import { baseMiddleware } from './src/middlewares/base.middleware.js';
import { globalErrorHandler } from './core/middlewares/globalErrorHandler.js';
import attRouter from './src/routes/attachements.route.js';

const app = express();
const port = 3001;

// Middlewares
app.use(express.json());
app.use(baseMiddleware);

// Routes
app.use('/notes', notesRouter);
app.use('/attachements', attRouter);


// Error handlers
app.use(globalErrorHandler);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
