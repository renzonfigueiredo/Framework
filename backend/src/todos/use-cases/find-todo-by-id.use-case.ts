import { Injectable, Logger } from "@nestjs/common";
import { FindTodoByIdRepository } from "../repository";

@Injectable()
export class FindTodoByIdUseCases {
    findById(id: string) {
      throw new Error('Method not implemented.');
    }
    constructor(
        private readonly findTodoByIdRepository: FindTodoByIdRepository,
        private readonly logger: Logger,
    ) {}
    async execute(id: string) {
        try {
            this.logger.log(`Finding toDo with id: ${id}...`);
            const todo = await this.findTodoByIdRepository.findById(id);
            this.logger.log(`ToDo found successfully: ${todo.id}`);
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error("Failed to find toDo by id");
        }
    }
}
