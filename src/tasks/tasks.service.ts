import { Injectable } from '@nestjs/common';
import { Task } from 'src/common/entities/task.entity';
<<<<<<< HEAD
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
=======
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
>>>>>>> 4d567fc (feat(FTDAS): Create POST /todos api to create task)
  }
}
