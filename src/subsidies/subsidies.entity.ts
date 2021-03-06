import { AfterInsert, AfterRemove, AfterUpdate, Entity, Column, PrimaryGeneratedColumn, ManyToOne, IsNull, CreateDateColumn } from 'typeorm';
import { Users } from 'src/users/users.entity';

@Entity()
export class Subsidies{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @CreateDateColumn() 
    date: Date;

    @ManyToOne(() => Users, users => users.subsidies)
    users: Users


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