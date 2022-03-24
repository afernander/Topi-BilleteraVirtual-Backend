import { AfterInsert, AfterRemove, AfterUpdate, Entity, Column, PrimaryGeneratedColumn, IsNull } from 'typeorm';

@Entity()
export class Users{

    @PrimaryGeneratedColumn()
    id_User: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    
    @Column({nullable: true})
    dinamic_Password: number;
    
    @Column({nullable: true})
    balance: number;

    @Column()
    date: Date;


    @AfterInsert()
    logInsert() {
        console.log('Inserted User with id', this.id_User);
    }

    @AfterUpdate()
    logUpdate(){
        console.log('Updated User with id', this.id_User);
    }

    @AfterRemove()
    logRemove(){
        console.log('Removed User with id', this.id_User);
    }
}