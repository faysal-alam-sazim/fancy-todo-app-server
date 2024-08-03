<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { Controller, Get } from '@nestjs/common';

import { TasksService } from './tasks.service';
import { Task } from 'src/common/entities/task.entity';
>>>>>>> 66b362b (feat(FTDAS): Get api for all todos)
=======
import { Body, Controller, Get, Post } from '@nestjs/common';

import { TasksService } from './tasks.service';
import { Task } from 'src/common/entities/task.entity';
import { CreateTaskDto } from './tasks.dto';
>>>>>>> dc64799 (feat(FTDAS): Create POST /todos api to create task)

@Controller('todos')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }
<<<<<<< HEAD
<<<<<<< HEAD

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
  }

  @Delete('completed')
  async removeCompleted(): Promise<void> {
    await this.tasksService.removeCompleted();
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    return await this.tasksService.deleteOne(+id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findOne(+id);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return await this.tasksService.deleteTask(+id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findOne(+id);
  }

  @Delete('completed')
  async removeCompleted(): Promise<void> {
    await this.tasksService.removeCompleted();
  }
=======
>>>>>>> 66b362b (feat(FTDAS): Get api for all todos)
=======

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.tasksService.createTask(createTaskDto);
  }
>>>>>>> dc64799 (feat(FTDAS): Create POST /todos api to create task)
}
