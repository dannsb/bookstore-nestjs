import { Controller } from '@nestjs/common';
import {
  Post,
  Get,
  Body,
  UseInterceptors,
  Session,
  Param,
} from '@nestjs/common/decorators';
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
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signUp(
      body.email,
      body.password,
      body.fullName,
    );
    session.userId = user.id;
    return user;
  }

  @UseInterceptors(new SerializeInterceptor(UserDto))
  @Post('/signin')
  async signIn(@Body() body: UserAuthDto, @Session() session: any) {
    const user = await this.authService.signIn(body.email, body.password);
    session.userId = user.id;
    return user; 
  }
}
