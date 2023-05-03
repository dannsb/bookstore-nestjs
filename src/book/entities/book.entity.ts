import { AfterInsert, AfterRemove, AfterUpdate } from 'typeorm';
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  category: string;

  @AfterInsert()
  logInsert() {
    console.log('book Inserted : ', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('book Removed : ', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('book Updated : ', this.id);
  }
}
