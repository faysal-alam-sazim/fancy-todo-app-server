import { Injectable } from '@nestjs/common';
import { Task } from 'src/common/entities/task.entity';
import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { TaskRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly em: EntityManager,
  ) {}

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.findAll();
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepository.create(createTaskDto);
    await this.em.persistAndFlush(task);
    return task;
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    return await this.taskRepository.updateTask(id, updateTaskDto);
  }
}
