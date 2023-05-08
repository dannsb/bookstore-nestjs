import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) private repo: Repository<Book>) {}

  create(name: string, code: string, category: string) {
    const book = this.repo.create({ name, code, category });
    return this.repo.save(book);
  }

  findOne(code: string) {
    return this.repo.findOne({
      where: {
        code,
      },
    });
  }

  findAll() {
    return this.repo.find();
  }
}
