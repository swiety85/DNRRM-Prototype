import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersSchema } from './schemas/users.schema';
import { CookieParserMiddleware } from '@nest-middlewares/cookie-parser';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UsersSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '1d',
      },
    }),
  ],
  controllers: [
    UsersController,
    AuthController,
  ],
  providers: [
    UsersService,
    AuthService,
    JwtStrategy,
  ],
  exports: [PassportModule, AuthService],
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    CookieParserMiddleware.configure(process.env.COOKIE_PARSER_SECRET);
    consumer.apply(CookieParserMiddleware).forRoutes('api');
  }
}
