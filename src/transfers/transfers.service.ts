import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Transfers } from './transfers.entity';
import {
  CreateTransferDto,
  UpdateTransferDto,
} from './dtos/create-transfer.dto';

@Injectable()
export class TransfersService {
  constructor(
    @InjectRepository(Transfers) private repo: Repository<Transfers>,
  ) {}

  create(data: CreateTransferDto) {
    const transfer = this.repo.create(data);

    return this.repo.save(transfer);
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id: id } });
  }

  findAll() {
    return this.repo.find();
  }

  async update(id: number, attrs: UpdateTransferDto) {
    const transfer = await this.findOne(id);
    if (!transfer) {
      throw new NotFoundException('transfer not found');
    }
    Object.assign(transfer, attrs);
    return this.repo.save(transfer);
  }

  async remove(id: number) {
    const transfer = await this.findOne(id);
    if (!transfer) {
      throw new NotFoundException('transfer not found');
    }
    return this.repo.remove(transfer);
  }
}
