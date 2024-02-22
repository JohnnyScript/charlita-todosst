import * as AWS from 'aws-sdk';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const sqsService = new AWS.SQS({ region: 'us-east-1' });

@Injectable()
export class QueueService {
  constructor(public configService: ConfigService) {}

  public async send(message: string) {
    return new Promise((resolve, reject) => {
      return sqsService.sendMessage(
        {
          QueueUrl: this.configService.get('queueUrl'),
          MessageBody: message,
        },
        function (err, data) {
          if (err) {
            console.error('SQS ERR:', 'Fail Send Message' + err);
            reject(err);
          } else {
            resolve(data.MessageId);
          }
        },
      );
    });
  }
}
