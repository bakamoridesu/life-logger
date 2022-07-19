import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TasksModule } from './tasks/tasks.module';
import { Task } from "./tasks/tasks.entity";

@Module({
  imports:
    [
      TypeOrmModule.forRoot({
        type: 'sqlite',
        database: 'db.db',
        entities: [Task],
        synchronize: true,
      }),
      TasksModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
