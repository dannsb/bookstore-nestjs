import { Controller } from '@nestjs/common';
import { Post, Get, Body, UseInterceptors } from '@nestjs/common/decorators';
import { UserService } from './user.service';
import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';

// dtos
import { CreateUserDto } from './dtos/create-user.dto';
import { UserAuthDto } from './dtos/user-auth.dto';
import { UserDto } from './dtos/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/auth')
  async userAuth(@Body() body: UserAuthDto) {
    const user = await this.userService.find(body.email, body.password);
    if (!user[0]) {
      return { message: 'username or password is wrong' };
    }
    return { message: 'you successfully logged in :)' };
  }

  @UseInterceptors(new SerializeInterceptor(UserDto))
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    return this.userService.create(body.email, body.fullName, body.password);
  }
}
