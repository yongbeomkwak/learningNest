import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export class User {
  @PrimaryGeneratedColumn('uuid')
  id: Number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
