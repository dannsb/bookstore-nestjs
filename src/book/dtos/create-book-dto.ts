import { IsString, IsNumber } from 'class-validator';

export class CreateBookDto {
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsString()
  code: string;
}
