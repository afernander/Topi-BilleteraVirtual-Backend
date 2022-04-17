import { Module } from '@nestjs/common';
import { SubsidiesController } from './subsidies.controller';
import { SubsidiesService } from './subsidies.service';

@Module({
  controllers: [SubsidiesController],
  providers: [SubsidiesService]
})
export class SubsidiesModule {}
