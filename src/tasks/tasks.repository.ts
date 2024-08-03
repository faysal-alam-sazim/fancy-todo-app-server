import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Task } from 'src/common/entities/task.entity';
<<<<<<< HEAD
import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';
=======
import { CreateTaskDto } from './tasks.dto';
>>>>>>> 4d567fc (feat(FTDAS): Create POST /todos api to create task)

@Injectable()
export class TasksRepository extends EntityRepository<Task> {
  constructor(em: EntityManager) {
    super(em, Task);
  }

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

  async createOne(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.create(createTaskDto);
    await this.em.persistAndFlush(task);
    return task;
  }
}
