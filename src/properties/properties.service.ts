import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dtos/CreateProperty.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from './properties.entity';
import { DeepPartial, Repository } from 'typeorm';
import { User } from '../users/users.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
    private userService: UsersService,
  ) {}
  async createProperty(user, createPropertyDto: CreatePropertyDto) {
    const property = this.propertyRepository.create(createPropertyDto);
    const finduser = await this.userService.getUser(user.id);
    if (finduser) {
      property.user = finduser;
    }
    const newProperty = await this.propertyRepository.save(property);
  }
}
