import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Task } from 'src/common/entities/task.entity';
import { UpdateTaskDto } from './tasks.dto';

@Injectable()
export class TaskRepository extends EntityRepository<Task> {
  constructor(em: EntityManager) {
    super(em, Task);
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.findOne(id);
    if (task) {
      this.assign(task, updateTaskDto);
      await this.em.persistAndFlush(task);
    }
    return task;
  }
}
