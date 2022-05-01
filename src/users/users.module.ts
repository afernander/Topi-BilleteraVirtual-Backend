import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from 'src/users/auth.service';
import { ParentsModule } from 'src/parents/parents.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { UsersController } from './users.controller';

@Module({
  imports: [ParentsModule, TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService, AuthService],
})
export class UsersModule {}
