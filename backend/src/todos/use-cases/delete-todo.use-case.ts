import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { DeleteTodoRepository } from "../repository";

@Injectable()
export class DeleteTodoUseCases {
    constructor(
        private readonly deleteTodoRepository: DeleteTodoRepository,
        private readonly logger: Logger,
    ) {}
    async execute(id: string) {
        try {
            this.logger.log('Deleting toDo...');
            const todo = await this.deleteTodoRepository.findById(id);

            if (!todo) {
                throw new NotFoundException("ToDo not found");
            }
            await this.deleteTodoRepository.delete(id);
            this.logger.log('ToDo deleted successfully.');
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}