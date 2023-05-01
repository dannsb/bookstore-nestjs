import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  PrimaryGeneratedColumn,
  Entity,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  fullName: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('user Inserted : ', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('user Removed : ', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('user Updated : ', this.id);
  }
}
