import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { StudentsController } from './students/students.controller';
import { StudentsModule } from './students/students.module';
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

@Module({
  imports: [UsersModule, StudentsModule, PromosModule, ProductsModule, TransactionModule, AdminModule, ParentsModule, PaysModule, AuthModule],
  controllers: [AppController, UsersController, StudentsController, PromosController, ProductsController, TransactionController, AdminController, ParentsController, PaysController, AuthController],
  providers: [AppService],
})
export class AppModule {}
