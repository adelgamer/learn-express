import { PrismaClient } from "@prisma/client"
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

import { TaskDto } from "../dtos/task.dto.js"

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!)
const prisma = new PrismaClient({ adapter })

export function getTasks() {
    return 'Tasks and Adel got paid 10 millions ' + new Date()
}

export async function createTask(task: TaskDto) {
    const createdTask = await prisma.task.create({
        data: task
    });
    return createdTask;
}