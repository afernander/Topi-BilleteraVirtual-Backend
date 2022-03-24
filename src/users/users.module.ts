import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { ParentsModule } from 'src/parents/parents.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { UsersController } from './users.controller';

@Module({
  imports: [ParentsModule, TypeOrmModule.forFeature([Users]) ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
