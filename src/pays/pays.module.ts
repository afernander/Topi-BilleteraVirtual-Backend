import { Module } from '@nestjs/common';
import { PaysService } from './pays.service';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [ProductsModule],
  providers: [PaysService]
})
export class PaysModule {}
