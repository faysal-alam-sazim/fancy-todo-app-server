import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task } from 'src/common/entities/task.entity';
<<<<<<< HEAD
<<<<<<< HEAD
import { TasksRepository } from './tasks.repository';
=======
import { TaskRepository } from './tasks.repository';
>>>>>>> 57d0b96 (feat(FTDAS): Create PUT /todos/:id to update task)
=======
import { TasksRepository } from './tasks.repository';
>>>>>>> 86bb982 (chore(FTDA): Enbale CORS for localhost:3000)

@Module({
  imports: [MikroOrmModule.forFeature([Task])],
  controllers: [TasksController],
<<<<<<< HEAD
<<<<<<< HEAD
  providers: [TasksService, TasksRepository],
=======
  providers: [TasksService, TaskRepository],
>>>>>>> 57d0b96 (feat(FTDAS): Create PUT /todos/:id to update task)
=======
  providers: [TasksService, TasksRepository],
>>>>>>> 86bb982 (chore(FTDA): Enbale CORS for localhost:3000)
})
export class TasksModule {}
