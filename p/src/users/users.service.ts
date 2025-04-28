import {
  BadRequestException,
  HttpException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UpdateUserDto } from './dtos/UpdateUser.dto';
import { CreatePropertyDto } from '../properties/dtos/CreateProperty.dto';
import { Property } from 'src/properties/properties.entity';

// This should be a real class/interface representing a user entity

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOne(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }
  createUser(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    if (!user) throw new BadRequestException();
    return this.userRepository.save(user);
  }
  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const finduser = await this.userRepository.findOne({ where: { id } });
    if (!finduser) throw new HttpException('User not found', 400);
    // const updateUser = {...finduser, ...updateUserDto};
    // return this.userRepository.save(updateUser);
    return this.userRepository.update(
      { id },
      { ...finduser, ...updateUserDto },
    );
  }
  async deleteUser(id: number) {
    const finduser = await this.userRepository.findOne({ where: { id } });
    if (!finduser) throw new HttpException('User not found', 400);
    return this.userRepository.remove(finduser);
  }
  getUser(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }
}
