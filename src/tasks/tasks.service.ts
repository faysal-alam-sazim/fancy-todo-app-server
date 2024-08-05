import { Injectable } from '@nestjs/common';

import { Task } from 'src/common/entities/task.entity';
import { TaskRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private readonly taskRepository: TaskRepository) {}
  async findAll(): Promise<Task[]> {
    return this.taskRepository.getAllTasks();
  }
}
