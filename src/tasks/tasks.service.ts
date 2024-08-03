import { Injectable } from '@nestjs/common';
<<<<<<< HEAD

import { Task } from 'src/common/entities/task.entity';
import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  async findAll(): Promise<Task[]> {
    return await this.tasksRepository.findAll();
  }

  async createOne(createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.tasksRepository.createOne(createTaskDto);
  }

  async updateOne(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.tasksRepository.findOneOrFail(id);
    return await this.tasksRepository.updateOne(task, updateTaskDto);
  }

  async deleteOne(id: number) {
    const task = await this.tasksRepository.findOne(id);
    return await this.tasksRepository.deleteOne(task);
=======
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';

import { Task } from 'src/common/entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: EntityRepository<Task>,
  ) {}
  async findAll(): Promise<Task[]> {
    return this.taskRepository.findAll();
>>>>>>> 66b362b (feat(FTDAS): Get api for all todos)
  }
}
