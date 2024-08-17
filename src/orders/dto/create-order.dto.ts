import { IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  userId: number;

  @IsString()
  productId: number;

  @IsNumber()
  totalPrice: number;
}
