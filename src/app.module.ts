import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';

// XXX   : 最新のtypeorm、@nestjs/typeormのパッケージだとエラー出る
// 解決策 : typeorm@0.2.45 @nestjs/typeorm@8.0.2に変更させる

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
