import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './products.entity';
import { CreateProductDto } from './dtos/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Products) private repo: Repository<Products>) {}

  create(data: CreateProductDto) {
    const product = this.repo.create(data);

    return this.repo.save(product);
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id: id } });
  }

  findAll() {
    return this.repo.find();
  }

  async update(id: number, attrs: Partial<Products>) {
    const product = await this.findOne(id);
    if (!product) {
      throw new NotFoundException('product not found');
    }
    Object.assign(product, attrs);
    return this.repo.save(product);
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    if (!product) {
      throw new NotFoundException('product not found');
    }
    return this.repo.remove(product);
  }
}
