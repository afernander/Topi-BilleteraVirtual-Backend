import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService){}

    async singup(email: string, password: string, name:string, date: Date, balance: number){
        // See if email is in used
        const users = await this.usersService.find(email);

        if (users.length){
            throw new BadRequestException('email in use');
        }

        // Hash user password
        //generate a salt
        const salt = randomBytes(8).toString('hex');

        // Hash the salt and the password together
        const hash = (await scrypt(password, salt, 32)) as Buffer;

        //join the hashed result and the salt together
        const result = salt +'.'+ hash.toString('hex');

        // create a new user and save it
        const user = await this.usersService.create(email, password, name, date, balance);

        //return the user
        return user;
    }

    async signin(email: string, password: string){
        const [user] = await this.usersService.find(email);

        // if (!user){
        //     throw new NotFoundException('User not foud');
        // }

        // const [salt, stroredhash] = user.password.split('.');

        // const hash = (await scrypt(password, salt, 32)) as Buffer;

        // if (stroredhash !== hash.toString('hex')){
        //     throw new BadRequestException('bad PASSWORD')
        // }

        return user;

    }

}
