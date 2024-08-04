import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task } from 'src/common/entities/task.entity';
<<<<<<< HEAD
import { TasksRepository } from './tasks.repository';
=======
import { TaskRepository } from './tasks.repository';
>>>>>>> 57d0b96 (feat(FTDAS): Create PUT /todos/:id to update task)

@Module({
  imports: [MikroOrmModule.forFeature([Task])],
  controllers: [TasksController],
<<<<<<< HEAD
  providers: [TasksService, TasksRepository],
=======
  providers: [TasksService, TaskRepository],
>>>>>>> 57d0b96 (feat(FTDAS): Create PUT /todos/:id to update task)
})
export class TasksModule {}
