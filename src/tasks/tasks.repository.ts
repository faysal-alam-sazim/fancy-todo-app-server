import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
<<<<<<< HEAD
import { Injectable } from '@nestjs/common';
import { Task } from 'src/common/entities/task.entity';
<<<<<<< HEAD
<<<<<<< HEAD
import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';
=======
import { CreateTaskDto } from './tasks.dto';
>>>>>>> 4d567fc (feat(FTDAS): Create POST /todos api to create task)
=======
import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';
>>>>>>> e018994 (feat(FTDAS): Create PUT /todos/:id to update task)

@Injectable()
export class TasksRepository extends EntityRepository<Task> {
  constructor(em: EntityManager) {
    super(em, Task);
  }
<<<<<<< HEAD

  async createOne(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.create(createTaskDto);
    await this.em.persistAndFlush(task);
    return task;
  }

  async updateOne(task: Task, updateTaskDto: UpdateTaskDto): Promise<Task> {
    this.assign(task, updateTaskDto);
    await this.em.persistAndFlush(task);
    return task;
  }
=======
>>>>>>> e54b1e0 (feat(FTDAS): Add Delete /todos/:id api and delete functionality)

  async createOne(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.create(createTaskDto);
    await this.em.persistAndFlush(task);
    return task;
  }

  async updateOne(task: Task, updateTaskDto: UpdateTaskDto): Promise<Task> {
    this.assign(task, updateTaskDto);
    await this.em.persistAndFlush(task);
    return task;
  }

  async deleteOne(task: Task) {
    await this.em.removeAndFlush(task);
=======
import { Task } from 'src/common/entities/task.entity';

export class TaskRepository extends EntityRepository<Task> {
  constructor(em: EntityManager) {
    super(em, Task);
  }
  async getAllTasks(): Promise<Task[]> {
    return await this.findAll();
>>>>>>> 1352e66 (feat(FTDAS): Get api for all todos)
  }
}
