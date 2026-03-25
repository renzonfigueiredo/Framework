import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class DeleteTodoRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findById(id: string) {
        // Retorna o objeto se achar, ou null se não achar
        return await this.prisma.todo.findUnique({
            where: { id }
        });
    }

    async delete(id: string) {
        // Executa a deleção
        return await this.prisma.todo.delete({
            where: { id }
        });
    }
}