import { Controller } from '@nestjs/common';
import { Post, Get, Body } from '@nestjs/common/decorators';
import { CreateUserDto } from './dtos/create-user-dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/auth')
  userAuth() {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.userService.create(body.email, body.fullName, body.password);
  }
}
