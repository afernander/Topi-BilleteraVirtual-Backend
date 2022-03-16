import { Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';

@Controller('auth')
export class AuthController {

    @Get()
    login(){

    }
    
    @Get()
    singOut(){

    }

    userType(){

    }

    @Post()
    saveInfo(){

    }

}
