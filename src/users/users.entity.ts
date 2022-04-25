import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  IsNull,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { UsersController } from './users.controller';
import { Parents } from 'src/parents/parents.entity';
import { Subsidies } from 'src/subsidies/subsidies.entity';
import { Transfers } from 'src/transfers/transfers.entity';
import { Expenses } from 'src/expenses/expenses.entity';
import { Bill } from 'src/bill/bill.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ nullable: true, default: 0 })
  balance: number;

  @Column()
  born_date: Date;

  @OneToOne(() => Parents, (parents) => parents.users)
  parents: Parents;

  @OneToMany(() => Subsidies, (subsidies) => subsidies.users)
  subsidies: Subsidies[];

  @OneToMany(() => Transfers, (transfers) => transfers.users)
  transfers: Transfers[];

  @OneToMany(() => Expenses, (expenses) => expenses.users)
  expenses: Expenses[];

  @OneToMany(() => Bill, (bill) => bill.users)
  bill: Bill[];

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User with id', this.id);
  }
}
