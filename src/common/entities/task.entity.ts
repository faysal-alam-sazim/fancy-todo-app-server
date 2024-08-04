import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { TasksRepository } from 'src/tasks/tasks.repository';

@Entity({
  tableName: 'task',
  repository: () => TasksRepository,
})
export class Task {
  @PrimaryKey()
  id!: number;

  @Property({ fieldName: 'title' })
  title!: string;

  @Property({ fieldName: 'description', nullable: true })
  description?: string;

  @Property({ fieldName: 'due_date', nullable: true })
  dueDate?: Date;

  @Property({ fieldName: 'priority' })
  priority!: string;

  @Property({ fieldName: 'status' })
  status!: string;
}
