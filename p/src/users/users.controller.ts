/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Patch, Post, Req, UploadedFile, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UpdateUserDto } from './dtos/UpdateUser.dto';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
  @UseGuards(JwtAuthGuard)
  @Patch('')
  update(@Req() req  , @Body() updateUserDto : UpdateUserDto){
    return this.userService.updateUser(req.user.userId, updateUserDto);
  }
  @UseGuards(JwtAuthGuard)
  @Delete('')
  delete(@Req()req ){
    return this.userService.deleteUser(req.user.userId);
  }
  @UseGuards(JwtAuthGuard)
  @Get('')
  get(@Req() req ) {
    return this.userService.getUser(req.user.userId);
  }
}
