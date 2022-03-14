import { Module } from '@nestjs/common';
import { ParentsService } from './parents.service';

@Module({
  providers: [ParentsService]
})
export class ParentsModule {}
