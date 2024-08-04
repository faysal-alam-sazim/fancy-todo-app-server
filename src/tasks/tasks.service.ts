import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
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
=======
import { Task } from 'src/common/entities/task.entity';
import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { TaskRepository } from './tasks.repository';
>>>>>>> 57d0b96 (feat(FTDAS): Create PUT /todos/:id to update task)

@Injectable()
export class TasksService {
  constructor(
<<<<<<< HEAD
    @InjectRepository(Task)
    private readonly taskRepository: EntityRepository<Task>,
=======
    private readonly taskRepository: TaskRepository,
    private readonly em: EntityManager,
>>>>>>> 57d0b96 (feat(FTDAS): Create PUT /todos/:id to update task)
  ) {}
  async findAll(): Promise<Task[]> {
    return this.taskRepository.findAll();
>>>>>>> 66b362b (feat(FTDAS): Get api for all todos)
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    return await this.taskRepository.updateTask(id, updateTaskDto);
  }

  async deleteTask(id: number) {
    const task = await this.taskRepository.findOne(id);
    if (task) {
      await this.em.removeAndFlush(task);
    }
  }
}
