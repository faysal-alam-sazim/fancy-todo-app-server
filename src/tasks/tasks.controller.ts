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

  @Post()
<<<<<<< HEAD
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
=======
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.tasksService.createTask(createTaskDto);
>>>>>>> dc64799 (feat(FTDAS): Create POST /todos api to create task)
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return this.tasksService.updateTask(+id, updateTaskDto);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return await this.tasksService.deleteTask(+id);
  }
}
