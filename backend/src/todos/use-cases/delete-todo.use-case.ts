import { Injectable, Logger } from "@nestjs/common";
import { DeleteTodoRepository } from "../repository";

@Injectable()
export class DeleteTodoUseCases {
    constructor(
        private readonly deleteTodoRepository: DeleteTodoRepository,
        private readonly logger: Logger,
    ) {}
    async execute(id: string) {
        try {
            this.logger.log('Deleting todo...');
            await this.deleteTodoRepository.delete(id);
            this.logger.log('Todo deleted successfully.');
        } catch (error) {
            this.logger.error('Error deleting todo.', error);
            throw error;
        }
    }
}