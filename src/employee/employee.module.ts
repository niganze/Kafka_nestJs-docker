import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { KafkaModule } from 'src/kafka/kafka.module';
import { CreateConsumer } from './create.consumer';
import { UpdateConsumer } from './update.consumer ';
import { RetrieveConsumer } from './retrieve.consumer';
import { DeleteConsumer } from './delete.consumer';

@Module({
  imports: [KafkaModule],
  providers: [
    EmployeeService,
    CreateConsumer,
    UpdateConsumer,
    RetrieveConsumer,
    DeleteConsumer,
  ],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
