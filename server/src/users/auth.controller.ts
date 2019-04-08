import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Controller, Post, Body, UnauthorizedException, Res } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res: any) {
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

    res.cookie(process.env.JWT_PARAM_NAME, token, {
      httpOnly: true,
      sameSite: true,
      signed: true,
    });

    return res.json({
      jwt: token,
    });
  }

  @Post('logout')
  async logout(@Res() res: any) {

    res.clearCookie(process.env.JWT_PARAM_NAME);

    return res.json({});
  }
}
