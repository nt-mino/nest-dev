import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';

export type User = {
  userId: number;
  Username: string;
  Password: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      Username: 'minoru',
      Password: 'password',
    },
  ];

  async findOne(Username: string): Promise<User | undefined> {
    return this.users.find((user) => user.Username === Username);
  }
}
