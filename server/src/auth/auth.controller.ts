import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { UsersService } from './../users/users.service';
import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  Res,
} from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

@Controller('api/auth')
export class AuthController {
  private usersService: UsersService;
  constructor(
    private readonly moduleRef: ModuleRef,
    private readonly authService: AuthService,
  ) {}

  onModuleInit() {
    this.usersService = this.moduleRef.get(UsersService, { strict: false });
  }

  @Post('login')
  async create(@Body() loginDto: LoginDto, @Res() res: any) {
    if (!loginDto.email || !loginDto.password) {
      throw new UnauthorizedException();
    }

    const user: any = await this.usersService.findOneByEmail(loginDto.email);
    const isPasswordValid =
      user && (await user.comparePassword(loginDto.password));

    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    const token = await this.authService.signIn(user);

    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: true,
      signed: true,
    });

    return res.json({
      jwt: token,
    });
  }
}
