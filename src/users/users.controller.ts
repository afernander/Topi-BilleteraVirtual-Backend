import { Controller, Get, Delete, Patch } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    createNewUser(){

    }

    @Get('/:id')
    async findUser( ){
        
    }

    @Get()
    findAllUsers(){
       
    }

    @Patch()
    updateUser(){
        
    }

    @Delete('/:id')
    removeUser(){
       
    }


}
