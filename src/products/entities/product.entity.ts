import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column()
  description: string;

  @OneToMany(() => Order, (order) => order.products)
  orders: Order[];
}
