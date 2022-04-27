import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';
import { Expenses } from './expenses.entity';

@Module({
  imports:  [TypeOrmModule.forFeature([Expenses])],
  providers: [ExpensesService],
  controllers: [ExpensesController]
})
export class ExpensesModule {}
