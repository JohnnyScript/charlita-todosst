import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dtos/Taks';
import { QueueService } from './queue/queueService';

@Injectable()
export class AppService {
  constructor(private queue: QueueService) {}
  healthCheck(): string {
    return 'Healthy';
  }

  async saveTask(task: CreateTaskDto): Promise<void> {
    try {
      await this.queue.send(JSON.stringify(task));
    } catch (error) {
      console.log('🚀 ~ saveTask ~ error', error);
    }
  }
}
