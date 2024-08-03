import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Task } from 'src/common/entities/task.entity';

@Injectable()
export class TaskRepository extends EntityRepository<Task> {
  constructor(em: EntityManager) {
    super(em, Task);
  }
  async getAllTasks(): Promise<Task[]> {
    return this.findAll();
  }
}
