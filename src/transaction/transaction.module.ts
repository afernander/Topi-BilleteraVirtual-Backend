import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { PaysModule } from 'src/pays/pays.module';
import { PromosModule } from 'src/promos/promos.module';

@Module({
  imports: [PaysModule, PromosModule],
  providers: [TransactionService]
})
export class TransactionModule {}
