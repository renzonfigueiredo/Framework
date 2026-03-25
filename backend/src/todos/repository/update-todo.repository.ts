import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdateTodoDto } from "../dto/update-todo.dto";

@Injectable()
export class UpdateTodoRepository {
    findById(id: string) {
        throw new Error("Method not implemented.");
    }
    
    constructor(private readonly prisma: PrismaService) {}

    async execute(id: string, data: UpdateTodoDto) {
        return await this.prisma.todo.update({where: {id}, data: data});
    }
}