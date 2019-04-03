import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsSchema } from './schemas/products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductsSchema }]),
    AuthModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
