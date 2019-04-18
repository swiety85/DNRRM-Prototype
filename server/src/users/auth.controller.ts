import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Controller, Post, Body, UnauthorizedException, Res, Req, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() {email, password}: LoginDto, @Res() res: any) {
    if (!email || !password) {
      throw new UnauthorizedException();
    }
    const user = await this.usersService.getUserByEmailAndPass(email, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    const token = await this.authService.signIn(user);

    this.setCookieToken(res, token);

    return res.json({
      jwt: token,
      user: { ...user.toObject(), password: null },
    });
  }

  @Post('logout')
  async logout(@Res() res: any) {

    res.clearCookie(process.env.JWT_PARAM_NAME);

    return res.json({});
  }

  @Get('loggedInUser')
  @UseGuards(AuthGuard())
  async loggedInUser(@Req() req: any) {
    return { ...req.user.toObject(), password: null };
  }

  private async getUserByEmailAndPass({email, password}: LoginDto) {
    if (!email || !password) {
      return null;
    }

    const user: any = await this.usersService.findOneByEmail(email);
    const isPasswordValid = user && (await user.comparePassword(password));

    return isPasswordValid ? user : null;
  }

  private setCookieToken(res: any, token: string): void {
    res.cookie(process.env.JWT_PARAM_NAME, token, {
      httpOnly: true,
      sameSite: true,
      signed: true,
    });
  }

}
