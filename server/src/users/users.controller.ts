import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseGuards(AuthGuard())
  async create(@Body() createProductDto: CreateUserDto) {
    this.usersService.create(createProductDto);
  }

  @Get()
  @UseGuards(AuthGuard())
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('setup')
  async setup(): Promise<any> {
    const userData = {
      name: 'Damian Wajdlich',
      password: 'password',
      email: 'swiety85@gmail.com',
    };

    this.usersService.create(userData);
    return { success: true };
  }
}
