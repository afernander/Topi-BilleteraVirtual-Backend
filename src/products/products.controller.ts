import { Controller, Get, Patch, Delete } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get()
    createNewProduct(){

    }

    @Get('/:id')
    async findProduct( ){
        
    }

    @Get()
    findAllProducts(){
       
    }

    @Patch()
    updateProduct(){
        
    }

    @Delete('/:id')
    removeProduct(){
       
    }

}
