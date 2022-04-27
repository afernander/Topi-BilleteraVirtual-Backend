import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Expenses } from './expenses.entity';
import { CreateExpDto, UpdateExpDto } from './dtos/create-Exp.dto';

@Injectable()
export class ExpensesService {

  constructor(@InjectRepository(Expenses) private repo: Repository<Expenses>) {}

  create(data: CreateExpDto) {
    const exp = this.repo.create(data);

    return this.repo.save(exp);
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id: id } });
  }

  findAll() {
    return this.repo.find();
  }

  async update(id: number, attrs: UpdateExpDto) {
    const exp = await this.findOne(id);
    if (!exp) {
      throw new NotFoundException('expense not found');
    }
    Object.assign(exp, attrs);
    return this.repo.save(exp);
  }

  async remove(id: number) {
    const exp = await this.findOne(id);
    if (!exp) {
      throw new NotFoundException('expense not found');
    }
    return this.repo.remove(exp);
  }

}
