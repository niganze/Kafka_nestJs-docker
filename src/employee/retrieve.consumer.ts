// retrieve.consumer.ts

import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from 'src/kafka/consumer/consumer.service';

@Injectable()
export class RetrieveConsumer implements OnModuleInit {
  constructor(private readonly _consumer: ConsumerService) {}

  async onModuleInit() {
    this._consumer.consume(
      'retrieve-client',
      { topic: 'retrieve-employee' },
      {
        eachMessage: async ({ topic, partition, message }) => {
          console.log({
            source: 'retrieve-consumer',
            message: message.value.toString(),
            partition: partition.toString(),
            topic: topic.toString(),
          });
        },
      },
    );
  }
}
