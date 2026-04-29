import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

import {
  CreateTodoUseCases,
  DeleteTodoUseCase,
  FindTodoByIdUseCases,
  findAllTodosUseCases,
  UpdateTodoUseCase
} from './use-cases';

@Injectable()
export class TodosService {
  constructor(
    private readonly createTodoUseCases: CreateTodoUseCases,
    private readonly updateTodoUseCases: UpdateTodoUseCase,
    private readonly findTodoUseCases: FindTodoByIdUseCases,
    private readonly findAllTodoUseCases: findAllTodosUseCases,
    private readonly deleteTodoUseCases: DeleteTodoUseCase
  ) {} 

  async create(createTodoDto: CreateTodoDto) {
    return await this.createTodoUseCases.execute(createTodoDto);
  }

  async findAll() {    
    return await this.findAllTodoUseCases.execute();
  }

  async findOne(id: string) {
    return await this.findTodoUseCases.execute(id); 
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    return await this.updateTodoUseCases.execute(id, updateTodoDto);
  }

  async remove(id: string) {
    return await this.deleteTodoUseCases.execute(id);
  }
}