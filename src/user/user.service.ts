import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, fullName: string, password: string) {
    const user = this.repo.create({ email, fullName, password });
    return this.repo.save(user);
  }

  find(email: string, password: string) {
    return this.repo.find({
      where: {
        email,
        password,
      },
    });
  }
}
