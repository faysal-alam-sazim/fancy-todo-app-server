import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
<<<<<<< HEAD
<<<<<<< HEAD
import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
<<<<<<< HEAD

import { Task } from 'src/common/entities/task.entity';
import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';

@Injectable()
export class TasksRepository extends EntityRepository<Task> {
=======
=======

>>>>>>> 3c04e04 (feat(FTDAS): Add Get /todos/:id API to fetch one task)
import { Task } from 'src/common/entities/task.entity';
import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';

@Injectable()
<<<<<<< HEAD
export class TaskRepository extends EntityRepository<Task> {
>>>>>>> 57d0b96 (feat(FTDAS): Create PUT /todos/:id to update task)
=======
export class TasksRepository extends EntityRepository<Task> {
>>>>>>> 3c04e04 (feat(FTDAS): Add Get /todos/:id API to fetch one task)
=======
import { Injectable } from '@nestjs/common';

import { Task } from 'src/common/entities/task.entity';
import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';

@Injectable()
<<<<<<< HEAD
export class TaskRepository extends EntityRepository<Task> {
>>>>>>> 57d0b96 (feat(FTDAS): Create PUT /todos/:id to update task)
=======
export class TasksRepository extends EntityRepository<Task> {
>>>>>>> 3e90812 (feat(FTDAS): Add Delete /todos/completed to delete completed tasks)
  constructor(em: EntityManager) {
    super(em, Task);
  }
  async getAllTasks(): Promise<Task[]> {
    return this.findAll();
  }

  async createOne(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.create(createTaskDto);
    await this.em.persistAndFlush(task);
    return task;
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3c04e04 (feat(FTDAS): Add Get /todos/:id API to fetch one task)
  async createOne(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.create(createTaskDto);
    await this.em.persistAndFlush(task);
    return task;
  }

  async updateOne(task: Task, updateTaskDto: UpdateTaskDto): Promise<Task> {
    this.assign(task, updateTaskDto);
    await this.em.persistAndFlush(task);
<<<<<<< HEAD
    return task;
  }

  async deleteOne(task: Task) {
    await this.em.removeAndFlush(task);
  }
=======
=======
>>>>>>> 57d0b96 (feat(FTDAS): Create PUT /todos/:id to update task)
  async updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.findOne(id);
    if (task) {
      this.assign(task, updateTaskDto);
      await this.em.persistAndFlush(task);
    }
    return task;
  }
<<<<<<< HEAD
>>>>>>> 57d0b96 (feat(FTDAS): Create PUT /todos/:id to update task)
=======
    return task;
  }
=======
  async updateOne(task: Task, updateTaskDto: UpdateTaskDto): Promise<Task> {
    this.assign(task, updateTaskDto);
    await this.em.persistAndFlush(task);
    return task;
  }
>>>>>>> 3e90812 (feat(FTDAS): Add Delete /todos/completed to delete completed tasks)

  async deleteOne(task: Task) {
    await this.em.removeAndFlush(task);
  }
<<<<<<< HEAD
>>>>>>> 3c04e04 (feat(FTDAS): Add Get /todos/:id API to fetch one task)
=======
import { Task } from 'src/common/entities/task.entity';

export class TaskRepository extends EntityRepository<Task> {
  constructor(em: EntityManager) {
    super(em, Task);
  }
  async getAllTasks(): Promise<Task[]> {
    return await this.findAll();
  }
>>>>>>> 1352e66 (feat(FTDAS): Get api for all todos)
=======
>>>>>>> 57d0b96 (feat(FTDAS): Create PUT /todos/:id to update task)
=======

  async removeCompleted(tasks: Task[]): Promise<void> {
    await this.em.removeAndFlush(tasks);
  }
>>>>>>> 3e90812 (feat(FTDAS): Add Delete /todos/completed to delete completed tasks)
}
