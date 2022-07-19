import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./DTO/create-task.dto";

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.getTasks()
  }

  @Post()
  createTask(@Body() body: CreateTaskDto) {
    console.log('create task')
    return this.tasksService.createTask(body.content)
  }
}
