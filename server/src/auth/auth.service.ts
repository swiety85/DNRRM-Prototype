import { JwtService } from '@nestjs/jwt';
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class AuthService {
  private usersService: UsersService;
  constructor(
    private readonly moduleRef: ModuleRef,
    private readonly jwtService: JwtService,
  ) {}

  onModuleInit() {
    this.usersService = this.moduleRef.get(UsersService, { strict: false });
  }

  // createToken
  async signIn(user: any): Promise<string> {
    return this.jwtService.sign({
      email: user.email,
    });
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.usersService.findOneByEmail(payload.email);
  }
}
