import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    this.productsService.create(createProductDto);
  }

  @Get()
  // @UseGuards(AuthGuard())
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }
}