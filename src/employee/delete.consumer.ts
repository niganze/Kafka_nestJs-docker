// delete.consumer.ts

import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from 'src/kafka/consumer/consumer.service';

@Injectable()
export class DeleteConsumer implements OnModuleInit {
  constructor(private readonly _consumer: ConsumerService) {}

  async onModuleInit() {
    this._consumer.consume(
      'delete-client',
      { topic: 'delete-employee' },
      {
        eachMessage: async ({ topic, partition, message }) => {
          // Process the delete request here
          console.log({
            source: 'delete-consumer',
            message: message.value.toString(),
            partition: partition.toString(),
            topic: topic.toString(),
          });
        },
      },
    );
  }
}
