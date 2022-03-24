import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { PromosController } from './promos/promos.controller';
import { PromosModule } from './promos/promos.module';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { TransactionController } from './transaction/transaction.controller';
import { TransactionModule } from './transaction/transaction.module';
import { AdminController } from './admin/admin.controller';
import { AdminModule } from './admin/admin.module';
import { ParentsController } from './parents/parents.controller';
import { ParentsModule } from './parents/parents.module';
import { PaysController } from './pays/pays.controller';
import { PaysModule } from './pays/pays.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/users.entity';
import { UsersService } from './users/users.service';

@Module({
  imports: [UsersModule, PromosModule, ProductsModule, TransactionModule, AdminModule, ParentsModule, PaysModule, AuthModule, 
    TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'tu.sqlite',
    entities: [Users],
    synchronize: true,
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
