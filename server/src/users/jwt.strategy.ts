import { Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: (req) => {
        const jwtProperty = process.env.JWT_PARAM_NAME;
        
        // try to read it from cookies (browser)
        if (req.signedCookies && req.signedCookies[jwtProperty]) {
          return req.signedCookies[jwtProperty];
        // fall back to headers (cross server communication)
        } else if (req.headers && req.headers[jwtProperty]) {
          return req.get(jwtProperty);
        }
      },
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.authService.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
