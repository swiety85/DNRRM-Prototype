import { AuthController } from './auth.controller';
import { Module, MiddlewareConsumer, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { CookieParserMiddleware } from '@nest-middlewares/cookie-parser';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
      signOptions: {
        expiresIn: '1d',
      },
    }),
    forwardRef(() => UsersModule),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [PassportModule, AuthService],
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    CookieParserMiddleware.configure('test1');
    consumer.apply(CookieParserMiddleware).forRoutes('api');
  }
}
