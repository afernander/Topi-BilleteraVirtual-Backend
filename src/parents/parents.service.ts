import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Parents } from './parents.entity';
import { CreateParentsDto, UpdateParentsDto } from './dtos/create-parents.dto';

@Injectable()
export class ParentsService {
  constructor(@InjectRepository(Parents) private repo: Repository<Parents>) {}

  create(data: CreateParentsDto) {
    const parents = this.repo.create(data);

    return this.repo.save(parents);
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id: id } });
  }

  findAll() {
    return this.repo.find();
  }

  async update(id: number, attrs: UpdateParentsDto) {
    const parents = await this.findOne(id);
    if (!parents) {
      throw new NotFoundException('parents not found');
    }
    Object.assign(parents, attrs);
    return this.repo.save(parents);
  }

  async remove(id: number) {
    const parents = await this.findOne(id);
    if (!parents) {
      throw new NotFoundException('parents not found');
    }
    return this.repo.remove(parents);
  }
}
