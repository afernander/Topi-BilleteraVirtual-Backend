import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bill } from './bill.entity';
import { CreateBillDto, UpdateBillDto } from './dtos/create-bill.dto';

@Injectable()
export class BillService {
  constructor(@InjectRepository(Bill) private repo: Repository<Bill>) {}

  create(data: CreateBillDto) {
    const bill = this.repo.create(data);

    return this.repo.save(bill);
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id: id } });
  }

  findAll() {
    return this.repo.find();
  }

  async update(id: number, attrs: UpdateBillDto) {
    const bill = await this.findOne(id);
    if (!bill) {
      throw new NotFoundException('bill not found');
    }
    Object.assign(bill, attrs);
    return this.repo.save(bill);
  }

  async remove(id: number) {
    const bill = await this.findOne(id);
    if (!bill) {
      throw new NotFoundException('bill not found');
    }
    return this.repo.remove(bill);
  }
}
