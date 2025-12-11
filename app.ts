import 'dotenv/config';
import express from 'express';
import taskRouter from './src/routes/tasks.route.js';
import { baseMiddleware } from './src/middlewares/base.middleware.js';
const app = express();
const port = 3001;

// Middlewares
app.use(express.json());
app.use(baseMiddleware);

// Routes
app.use('/tasks', taskRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
