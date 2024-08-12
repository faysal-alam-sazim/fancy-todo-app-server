<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 31ac275 (feat(FTDAS): Add Delete /todos/:id api and delete functionality)
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
<<<<<<< HEAD

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

=======
import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
>>>>>>> 50fe548 (feat(FTDAS): Create POST /todos api to create task)
import { TasksService } from './tasks.service';
import { Task } from 'src/common/entities/task.entity';

import { CreateTaskDto } from './tasks.dto';
>>>>>>> dc64799 (feat(FTDAS): Create POST /todos api to create task)
=======
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
=======
>>>>>>> 31ac275 (feat(FTDAS): Add Delete /todos/:id api and delete functionality)

import { TasksService } from './tasks.service';
import { Task } from 'src/common/entities/task.entity';
import { CreateTaskDto, UpdateTaskDto } from './tasks.dto';
>>>>>>> 57d0b96 (feat(FTDAS): Create PUT /todos/:id to update task)

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
<<<<<<< HEAD
>>>>>>> dc64799 (feat(FTDAS): Create POST /todos api to create task)
=======

  @Put('sync')
  async syncTasks(@Body() tasks: Task[]): Promise<void> {
    await this.tasksService.syncTasks(tasks);
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return this.tasksService.updateTask(+id, updateTaskDto);
  }
<<<<<<< HEAD
>>>>>>> 57d0b96 (feat(FTDAS): Create PUT /todos/:id to update task)
=======

  @Delete('completed')
  async removeCompleted(): Promise<void> {
    await this.tasksService.removeCompleted();
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return await this.tasksService.deleteTask(+id);
  }
<<<<<<< HEAD
>>>>>>> 31ac275 (feat(FTDAS): Add Delete /todos/:id api and delete functionality)
=======

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findOne(+id);
  }
<<<<<<< HEAD

  @Delete('completed')
  async removeCompleted(): Promise<void> {
    await this.tasksService.removeCompleted();
  }
>>>>>>> c30c7e8 (feat(FTDAS): Add Get /todos/:id API to fetch one task)
=======
>>>>>>> a125ba2 (chore(FTDA): Fix delete completed task api issue)
}
