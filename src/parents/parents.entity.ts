import { Users } from 'src/users/users.entity';
import { AfterInsert, AfterRemove, AfterUpdate, Entity, Column, PrimaryGeneratedColumn, IsNull, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Parents{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    password: string;

    @OneToOne(() => Users, (users) => users.parents) // specify inverse side as a second parameter
    @JoinColumn()
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