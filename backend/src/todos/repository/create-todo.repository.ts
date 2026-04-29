import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { CreateTodoDto, TodoPriority } from "../dto/create-todo.dto";

@Injectable()
export class CreatetodoRepository {

    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateTodoDto) {
        const { userId, ...rest } = data;
        return await this.prisma.todo.create({
            data: {
                title: rest.title,
                description: rest.description,
                completed: rest.completed ?? false,
                priority: rest.priority ?? TodoPriority.MEDIUM,
                dueAt: rest.dueAt,
                completedAt: rest.completedAt,
                userId,
            },
        });
    }
}