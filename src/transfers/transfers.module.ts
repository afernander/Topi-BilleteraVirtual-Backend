import { Module } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { TransfersController } from './transfers.controller';

@Module({
  providers: [TransfersService],
  controllers: [TransfersController]
})
export class TransfersModule {}
