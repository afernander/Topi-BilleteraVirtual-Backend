import { AfterInsert, AfterRemove, AfterUpdate, Entity, Column, ManyToOne, PrimaryGeneratedColumn, IsNull, CreateDateColumn } from 'typeorm';
import { Users } from 'src/users/users.entity';
import { Products } from 'src/products/products.entity';

@Entity()
export class Bill{

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn() 
    date: Date;

    @Column()
    total: number;

    @ManyToOne(() => Users, (users) => users.bill)
    users: Users;

    @ManyToOne(() => Products, (products) => products.bill)
    products: Products;

    @AfterInsert()
    logInsert() {
        console.log('Inserted User with id', this.id);
    }

    @AfterUpdate()
    logUpdate(){
        console.log('Updated User with id', this.id);
    }

    @AfterRemove()
    logRemove(){
        console.log('Removed User with id', this.id);
    }
}