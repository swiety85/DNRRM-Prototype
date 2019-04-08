import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

const dbName = process.env.MONGODB_INITDB_DATABASE;
const dbPort = process.env.MONGODB_PORT;
const dbUser = process.env.APP_MONGODB_ADMINUSERNAME;
const dbPwd = process.env.APP_MONGODB_ADMINPASSWORD;

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${dbUser}:${dbPwd}@mongo:${dbPort}/${dbName}`, {
      retryAttempts: 50,
      retryDelay: 5000,
      useNewUrlParser: true,
    }),
    ProductsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
