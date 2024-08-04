import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 66b362b (feat(FTDAS): Get api for all todos)
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';

import { Task } from 'src/common/entities/task.entity';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Task } from 'src/common/entities/task.entity';
import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { TaskRepository } from './tasks.repository';
>>>>>>> 57d0b96 (feat(FTDAS): Create PUT /todos/:id to update task)
=======
>>>>>>> 66b362b (feat(FTDAS): Get api for all todos)
=======
import { CreateTaskDto } from './tasks.dto';
>>>>>>> dc64799 (feat(FTDAS): Create POST /todos api to create task)
=======
import { Task } from 'src/common/entities/task.entity';
import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { TaskRepository } from './tasks.repository';
>>>>>>> 57d0b96 (feat(FTDAS): Create PUT /todos/:id to update task)

@Injectable()
export class TasksService {
  constructor(
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

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
>>>>>>> 3c04e04 (feat(FTDAS): Add Get /todos/:id API to fetch one task)
  }

  async updateOne(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.tasksRepository.findOneOrFail(id);
    return await this.tasksRepository.updateOne(task, updateTaskDto);
  }

  async deleteOne(id: number) {
    const task = await this.tasksRepository.findOne(id);
    return await this.tasksRepository.deleteOne(task);
  }

  async findOne(id: number): Promise<Task> {
    return await this.tasksRepository.findOneOrFail(id);
=======
    @InjectRepository(Task)
    private readonly taskRepository: EntityRepository<Task>,
=======
    private readonly taskRepository: TaskRepository,
>>>>>>> 57d0b96 (feat(FTDAS): Create PUT /todos/:id to update task)
    private readonly em: EntityManager,
  ) {}

  async findAll(): Promise<Task[]> {
<<<<<<< HEAD
    return this.taskRepository.findAll();
>>>>>>> 66b362b (feat(FTDAS): Get api for all todos)
=======
    return await this.taskRepository.findAll();
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepository.create(createTaskDto);
    await this.em.persistAndFlush(task);
    return task;
>>>>>>> dc64799 (feat(FTDAS): Create POST /todos api to create task)
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    return await this.taskRepository.updateTask(id, updateTaskDto);
  }
}
