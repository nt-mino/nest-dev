import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { UsersService } from './users.service';

@Module({
  // UserエンティティをUsersServiceで使えるようにする
  imports: [],
  // exportsするために必要。UsersModule内で使うのにも必要
  providers: [UsersService],
  // UsersServiceを他のクラスでも使えるようにする
  exports: [UsersService],
})
export class UsersModule {}
