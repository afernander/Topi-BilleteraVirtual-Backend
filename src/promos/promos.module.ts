import { Module } from '@nestjs/common';
import { PromosService } from './promos.service';

@Module({
  providers: [PromosService]
})
export class PromosModule {}
