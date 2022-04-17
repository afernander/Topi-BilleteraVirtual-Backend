import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillModule } from './bill/bill.module';
import { ProductsModule } from './products/products.module';
import { ExpensesModule } from './expenses/expenses.module';
import { TransfersModule } from './transfers/transfers.module';
import { ParentsModule } from './parents/parents.module';
import { SubsidiesModule } from './subsidies/subsidies.module';
import { Users } from './users/users.entity';
import { Parents } from './parents/parents.entity';
import { Subsidies } from './subsidies/subsidies.entity';
import { Transfers } from './transfers/transfers.entity';
import { Expenses } from './expenses/expenses.entity';
import { Bill } from './bill/bill.entity';
import { Products } from './products/products.entity';


@Module({
  imports: [UsersModule, ProductsModule, TransfersModule, ParentsModule, AuthModule,BillModule, ExpensesModule, TransfersModule, SubsidiesModule, 
    TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'tu.sqlite',
    entities: [Users, Parents, Subsidies, Transfers, Expenses, Bill, Products],
    synchronize: true,
  }), 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
