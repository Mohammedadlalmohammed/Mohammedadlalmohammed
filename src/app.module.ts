import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyModule } from './properties/properties.module';
import { User } from './users/users.entity';
import { Property } from './properties/properties.entity';
import { ContractsModule } from './contracts/contracts.module';
import { Contract } from './contracts/contracts.entity';
import { Users_Contracts } from './typeorm/users_contracts.entity';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot({
    type : 'mysql',
    host : 'localhost',
    port : 3306,
    username : 'root',
    password : '',
    database : 'test_db',
    entities : [User, Property, Contract, Users_Contracts],
    synchronize : true,
  }), PropertyModule, UsersModule, ContractsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
