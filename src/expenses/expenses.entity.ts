import { AfterInsert, AfterRemove, AfterUpdate, Entity, Column, ManyToOne, PrimaryGeneratedColumn, IsNull } from 'typeorm';
import { Users } from 'src/users/users.entity';

@Entity()
export class Expenses{

    @PrimaryGeneratedColumn()
    id_expense: number;

    @Column()
    amount: number;

    @Column()
    category: string;

    @ManyToOne(() => Users, (users) => users.expenses)
    users: Users;

    @AfterInsert()
    logInsert() {
        console.log('Inserted User with id', this.id_expense);
    }

    @AfterUpdate()
    logUpdate(){
        console.log('Updated User with id', this.id_expense);
    }

    @AfterRemove()
    logRemove(){
        console.log('Removed User with id', this.id_expense);
    }
}