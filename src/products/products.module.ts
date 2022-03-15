import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { PromosModule } from 'src/promos/promos.module';

@Module({
  imports: [PromosModule],
  providers: [ProductsService]
})
export class ProductsModule {}
