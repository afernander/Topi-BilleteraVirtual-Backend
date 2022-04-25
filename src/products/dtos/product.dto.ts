import { Expose } from 'class-transformer';

export class ProductDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  price: number;

  @Expose()
  description: string;
}
