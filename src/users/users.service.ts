import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService{
    constructor(@InjectRepository(Users) private repo: Repository<Users>){

    }

    create(email: string, password: string, name:string, born_date: Date){
        const user = this.repo.create({email, password,name , born_date});

        return this.repo.save(user);
    }

    findOne(id_User: any){
        return this.repo.findOne(id_User);
    }

    find(email: string){
       // return this.repo.find({email});
    }
    /*
    async update(id: number, attrs: Partial<Users>){
        const user = await this.findOne(id);
        if (!user){
            throw new NotFoundException('user not found');
        }
        Object.assign(user, attrs);
        return this.repo.save(user);
    }
    
    async remove(id: number){
        const user = await this.findOne(id);
        if (!user){
            throw new NotFoundException('user not found');
        }
        return this.repo.remove(user);
    }
    */
}
