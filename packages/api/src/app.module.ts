import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import config from './config/config';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { QueueService } from './queue/queueService';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, QueueService],
})
export class AppModule {}
