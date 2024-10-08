import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task } from 'src/common/entities/task.entity';
import { TasksRepository } from './tasks.repository';

@Module({
  imports: [MikroOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
})
export class TasksModule {}
