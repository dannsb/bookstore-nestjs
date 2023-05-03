import { Controller } from '@nestjs/common';
import { Post, Get, Body, Param } from '@nestjs/common/decorators';
import { CreateBookDto } from './dtos/create-book-dto';

@Controller('book')
export class BookController {
  @Get()
  listBooks() {}

  @Post()
  createBook(@Body() body: CreateBookDto) {}

  @Get('/:id')
  async getBook(@Param('id') id: string) {
    
  }
}
