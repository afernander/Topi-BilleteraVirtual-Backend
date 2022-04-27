import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Subsidies } from './subsidies.entity';
import { CreateSubDto, UpdateSubDto } from './dtos/create-Sub.dto';

@Injectable()
export class SubsidiesService {

    constructor(@InjectRepository(Subsidies) private repo: Repository<Subsidies>) {}

    create(data: CreateSubDto) {
      const sub = this.repo.create(data);
  
      return this.repo.save(sub);
    }
  
    findOne(id: number) {
      return this.repo.findOne({ where: { id: id } });
    }
  
    findAll() {
      return this.repo.find();
    }
  
    async update(id: number, attrs: UpdateSubDto) {
      const sub = await this.findOne(id);
      if (!sub) {
        throw new NotFoundException('subsidie not found');
      }
      Object.assign(sub, attrs);
      return this.repo.save(sub);
    }
  
    async remove(id: number) {
      const sub = await this.findOne(id);
      if (!sub) {
        throw new NotFoundException('subsidie not found');
      }
      return this.repo.remove(sub);
    }
}
