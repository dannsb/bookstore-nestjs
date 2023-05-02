import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// modules
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';

// entities
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    UserModule,
    BookModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bookstore',
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
