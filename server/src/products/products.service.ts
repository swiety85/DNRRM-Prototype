import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private readonly catModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdCat = new this.catModel(createProductDto);
    return await createdCat.save();
  }

  async findAll(): Promise<Product[]> {
    return await this.catModel.find().exec();
  }
}
