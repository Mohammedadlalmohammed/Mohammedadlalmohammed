import { Module } from '@nestjs/common';
import { PropertyController } from './properties.controller';
import { PropertyService } from './properties.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './properties.entity';
import { User } from '../users/users.entity';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';

@Module({
  imports : [TypeOrmModule.forFeature([Property]), UsersModule],
  controllers: [PropertyController],
  providers: [PropertyService]
})
export class PropertyModule {}
