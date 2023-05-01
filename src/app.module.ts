import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [UserModule, BookModule],
})
export class AppModule {}
