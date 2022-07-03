import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';
// import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  private users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  create(user: User): User {
    this.users.push(user);
    return user;
  }

  findById(id: string): User {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  deleteAll() {
    this.users = [];
    return this.users;
  }
}
