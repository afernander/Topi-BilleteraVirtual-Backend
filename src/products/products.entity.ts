import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Bill } from 'src/bill/bill.entity';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @OneToMany(() => Bill, (bill) => bill.products)
  bill: Bill[];

  @AfterInsert()
  logInsert() {
    console.log('Inserted Product with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated Product with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed Product with id', this.id);
  }
}
