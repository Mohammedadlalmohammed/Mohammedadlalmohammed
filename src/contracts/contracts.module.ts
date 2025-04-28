import { Module } from '@nestjs/common';
import { ContractsController } from './contracts.controller';
import { ContractsService } from './contracts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/users.entity';
import { Contract } from './contracts.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Contract])],
  controllers: [ContractsController],
  providers: [ContractsService]
})
export class ContractsModule {}
