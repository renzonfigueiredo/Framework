import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export enum TodoPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @IsOptional()
  @IsEnum(TodoPriority)
  priority?: TodoPriority;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  dueAt?: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  completedAt?: Date;

  @IsUUID()
  userId: string;
}
