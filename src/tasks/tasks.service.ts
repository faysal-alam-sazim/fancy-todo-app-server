import { Injectable } from '@nestjs/common';
import { Task } from 'src/common/entities/task.entity';
import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  async findAll(): Promise<Task[]> {
    return await this.tasksRepository.findAll();
    return await this.tasksRepository.findAll();
  }

  async createOne(createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.tasksRepository.createOne(createTaskDto);
  }

  async updateOne(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.tasksRepository.findOneOrFail(id);
    return await this.tasksRepository.updateOne(task, updateTaskDto);
  }
}
