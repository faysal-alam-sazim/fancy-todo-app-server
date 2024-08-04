import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { Task } from 'src/common/entities/task.entity';
import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';

@Controller('todos')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Post()
  async createOne(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.tasksService.createOne(createTaskDto);
  }

  @Put(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return this.tasksService.updateOne(+id, updateTaskDto);
<<<<<<< HEAD
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    return await this.tasksService.deleteOne(+id);
=======
>>>>>>> 3c04e04 (feat(FTDAS): Add Get /todos/:id API to fetch one task)
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    return await this.tasksService.deleteOne(+id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findOne(+id);
  }
}
