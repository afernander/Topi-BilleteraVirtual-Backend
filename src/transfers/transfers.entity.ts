import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Users } from 'src/users/users.entity';

@Entity()
export class Transfers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  user_dest_id: number;

  @CreateDateColumn()
  date: Date;

  @ManyToOne(() => Users, (users) => users.transfers)
  users: Users;

  @AfterInsert()
  logInsert() {
    console.log('Inserted Transfer with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated Transfer with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed Transfer with id', this.id);
  }
}
