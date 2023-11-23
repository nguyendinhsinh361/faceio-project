import { Module } from '@nestjs/common';
import { DatabaseMongoConfig } from './config/mongo';
import { ConfigModule } from '@nestjs/config';
import { AuthFaceIOModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseMongoConfig,
    AuthFaceIOModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
