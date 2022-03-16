import { Controller, Get, Delete, Patch } from '@nestjs/common';

@Controller('promos')
export class PromosController {

    @Get()
    createNewPromo(){

    }

    @Get('/:id')
    async findPromo( ){
        
    }

    @Get()
    findAllPromos(){
       
    }

    @Patch()
    updatePromo(){
        
    }

    @Delete('/:id')
    removePromo(){
       
    }
}
