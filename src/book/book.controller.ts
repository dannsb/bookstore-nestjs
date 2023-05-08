import { Controller } from '@nestjs/common';
import { Post, Get, Body, Param } from '@nestjs/common/decorators';
import { CreateBookDto } from './dtos/create-book-dto';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}
  @Get()
  listBooks() {
    return this.bookService.findAll();
  }

  @Post()
  createBook(@Body() body: CreateBookDto) {
    return this.bookService.create(body.name, body.code, body.category);
  }

  @Get('/:code')
  async getBook(@Param('code') code: string) {
    return this.bookService.findOne(code);
  }
}
