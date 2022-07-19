import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task } from "./tasks.entity";

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private repo: Repository<Task>) {}

  createTask(content: string) {
    const task = this.repo.create({ content });
    return this.repo.save(task)
  }

  getTasks() {
    return this.repo.find()
  }
}
