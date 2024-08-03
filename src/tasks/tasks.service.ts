import { Injectable } from '@nestjs/common';

import { Task } from 'src/common/entities/task.entity';
import { CreateTaskDto } from './tasks.dto';
import { TaskRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.findAll();
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.taskRepository.createOne(createTaskDto);
  }
}
