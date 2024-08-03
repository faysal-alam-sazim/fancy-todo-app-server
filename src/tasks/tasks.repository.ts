import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { Task } from 'src/common/entities/task.entity';

export class TaskRepository extends EntityRepository<Task> {
  constructor(em: EntityManager) {
    super(em, Task);
  }
  async getAllTasks(): Promise<Task[]> {
    return await this.findAll();
  }
}
