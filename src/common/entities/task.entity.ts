import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { TaskRepository } from 'src/tasks/tasks.repository';

@Entity({
  tableName: 'task',
  repository: () => TaskRepository,
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
