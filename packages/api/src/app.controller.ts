import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTaskDto } from './dtos/Taks';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  healthCheck(): string {
    return this.appService.healthCheck();
  }

  @Post('/save-task')
  async saveTask(@Body() data: CreateTaskDto): Promise<void> {
    return this.appService.saveTask(data);
  }
}
