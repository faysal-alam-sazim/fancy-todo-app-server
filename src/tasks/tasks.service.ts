import { Injectable } from '@nestjs/common';

import { Task } from 'src/common/entities/task.entity';
import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  async findAll(): Promise<Task[]> {
    return await this.tasksRepository.findAll();
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.tasksRepository.createOne(createTaskDto);
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.tasksRepository.findOneOrFail(id);
    return await this.tasksRepository.updateOne(task, updateTaskDto);
  }

  async deleteTask(id: number) {
    const task = await this.tasksRepository.findOne(id);
    return await this.tasksRepository.deleteOne(task);
  }

  async findOne(id: number): Promise<Task> {
    return await this.tasksRepository.findOneOrFail(id);
  }

  async removeCompleted(): Promise<void> {
    const completedTasks = await this.tasksRepository.find({
      status: 'completed',
    });
    await this.tasksRepository.removeCompleted(completedTasks);
  }
}
