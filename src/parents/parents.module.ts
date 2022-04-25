import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParentsController } from './parents.controller';
import { Parents } from './parents.entity';
import { ParentsService } from './parents.service';

@Module({
  imports: [TypeOrmModule.forFeature([Parents])],
  controllers: [ParentsController],
  providers: [ParentsService],
})
export class ParentsModule {}
