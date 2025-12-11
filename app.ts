import express from 'express';
import { PrismaClient } from '@prisma/client';
import taskRouter from './src/routes/tasks.route';
import { baseMiddleware } from './src/middlewares/base.middleware';

const prisma = new PrismaClient();
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
