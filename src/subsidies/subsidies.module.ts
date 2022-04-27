import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubsidiesController } from './subsidies.controller';
import { SubsidiesService } from './subsidies.service';
import { Subsidies } from './subsidies.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subsidies])],
  controllers: [SubsidiesController],
  providers: [SubsidiesService]
})
export class SubsidiesModule {}
