import { PrismaClient } from "@prisma/client"
import { TaskDto } from "../dtos/task.dto"

const prisma = new PrismaClient();

export function getTasks() {
    return 'Tasks and Adel got paid 10 millions ' + new Date()
}

export async function createTask(task: TaskDto) {
    const createdTask = await prisma.task.create({
        data: task
    });
    return createdTask;
}