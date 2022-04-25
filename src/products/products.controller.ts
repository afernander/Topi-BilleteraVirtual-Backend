import {
  Param,
  NotFoundException,
  Controller,
  Get,
  Delete,
  Patch,
  Put,
  Post,
  Body,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ProductDto } from './dtos/product.dto';
import { UpdateProductDto } from './dtos/create-product.dto';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';

@Controller('products')
@Serialize(ProductDto)
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  createNewProduct(@Body() body: CreateProductDto) {
    this.productsService.create(body);
  }

  @Get('/:id')
  async findProduct(@Param('id', ParseIntPipe) id: number) {
    //console.log('handler is running');
    const product = await this.productsService.findOne(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  @Get()
  findAllproducts() {
    return this.productsService.findAll();
  }

  @Put('/:id')
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateProductDto,
  ) {
    return this.productsService.update(id, body);
  }

  @Delete('/:id')
  removeProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.remove(id);
  }
}
