import { Module } from '@nestjs/common';
import { PaysService } from './pays.service';

@Module({
  providers: [PaysService]
})
export class PaysModule {}
