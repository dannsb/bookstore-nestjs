import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

// modules
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';

// entities
import { User } from './user/entities/user.entity';
import { Book } from './book/entities/book.entity';

@Module({
  imports: [
    UserModule,
    BookModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DBUSERNAME,
      password: process.env.DBPASS,
      database: process.env.DBNAME,
      entities: [User, Book],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
