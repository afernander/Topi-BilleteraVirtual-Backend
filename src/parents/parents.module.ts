import { Module } from '@nestjs/common';
import { ParentsService } from './parents.service';


@Module({
  imports: [],
  providers: [ParentsService],
  exports:[ParentsService]
})
export class ParentsModule {}
