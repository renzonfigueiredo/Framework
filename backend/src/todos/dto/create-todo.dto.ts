import { title } from "process";

export class CreateTodoDto {

    title: string;
    description: string;
    completed: boolean;
    priority: TodoPriority;
    dueAt: Date;
    completedAt: Date;
    userid: string;
    createdAt: Date;
    updateAt: Date;
}

enum TodoPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

