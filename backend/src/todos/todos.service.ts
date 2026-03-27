import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

import {
  CreateTodoUseCases,
  DeleteTodoUseCases,
  FindTodoByIdUseCases,
  findAllTodosUseCases,
  UpdateTodoUseCases
} from './use-cases';

@Injectable()
export class TodosService {
  constructor(
    private readonly createTodoUseCases: CreateTodoUseCases,
    private readonly updateTodoUseCases: UpdateTodoUseCases,
    private readonly findTodoUseCases: FindTodoByIdUseCases,
    private readonly findAllTodoUseCases: findAllTodosUseCases,
    private readonly deleteTodoUseCases: DeleteTodoUseCases
  ) {} 

  async create(createTodoDto: CreateTodoDto) {
    return await this.createTodoUseCases.execute(createTodoDto);
  }

  async findAll() {    
    return await this.findAllTodoUseCases.execute();
  }

  async findById(id: string) {
    return await this.findTodoUseCases.execute(id);
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    return await this.updateTodoUseCases.execute(id, updateTodoDto);
  }

  async delete(id: string) {
    return await this.deleteTodoUseCases.execute(id);
  }
}