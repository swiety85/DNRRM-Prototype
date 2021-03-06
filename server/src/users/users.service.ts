import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);

    return await createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userModel
      .findOne({ email })
      .exec();
  }

  async findById(id: string): Promise<User[]> {
    return await this.userModel.findById(id).exec();
  }

  async getUserByEmailAndPass(email, password) {
    const user: any = await this.findOneByEmail(email);
    const isPasswordValid = user && (await user.comparePassword(password));

    return isPasswordValid ? user : null;
  }

}
