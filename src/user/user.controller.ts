import { Controller } from '@nestjs/common';
import { Post, Get, Body, UseInterceptors } from '@nestjs/common/decorators';
import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';

// services
import { UserService } from './user.service';
import { AuthService } from './auth.service';

// dtos
import { CreateUserDto } from './dtos/create-user.dto';
import { UserAuthDto } from './dtos/user-auth.dto';
import { UserDto } from './dtos/user.dto';

@Controller('auth')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @UseInterceptors(new SerializeInterceptor(UserDto))
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    return this.authService.signUp(body.email, body.password, body.fullName);
  }

  @UseInterceptors(new SerializeInterceptor(UserDto))
  @Post('/signin')
  signin(@Body() body: UserAuthDto) {
    return this.authService.signIn(body.email, body.password);
  }
}
