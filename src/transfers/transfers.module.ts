import { Module } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { TransfersController } from './transfers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transfers } from './transfers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transfers])],
  providers: [TransfersService],
  controllers: [TransfersController],
})
export class TransfersModule {}
