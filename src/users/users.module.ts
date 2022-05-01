import { APP_INTERCEPTOR } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from 'src/users/auth.service';
import { ParentsModule } from 'src/parents/parents.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { UsersController } from './users.controller';
import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';

@Module({
  imports: [ParentsModule, TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [
    UsersService, 
    AuthService, 
    {
      provide: APP_INTERCEPTOR,
      useClass: CurrentUserInterceptor
    }
  ],
})
export class UsersModule {}
