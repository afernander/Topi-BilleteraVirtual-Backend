import { Param,NotFoundException,Controller, Get, Delete, Patch, Post, Body, Query } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { UpdateUserDto } from './dtos/update-user.dto'


@Controller('users')
@Serialize(UserDto)
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post('/singup')
    createNewUser(@Body() body: CreateUserDto){
        this.usersService.create(body.email, body.password,body.name, body.date)
    }

    @Get('/:id')
    async findUser(@Param('id') id: string ){
        //console.log('handler is running');
       const user = await this.usersService.findOne(parseInt(id));
       if(!user){
           throw new NotFoundException('User not found');
       }
       return user;
    }

    @Get()
    findAllUsers(@Query('email') email: string){
       return this.usersService.find(email);
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto){
        return this.usersService.update(parseInt(id), body); 
    }

    @Delete('/:id')
    removeUser(@Param('id') id: string){
        return this.usersService.remove(parseInt(id));
    }


}
