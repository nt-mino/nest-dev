import { Injectable } from '@nestjs/common';
import { User } from '../users/users.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(Username: string, Password: string): Promise<any | null> {
    const user = await this.usersService.findOne(Username);
    if (user && user.Password === Password) {
      const { Password, ...result } = user;
      return result;
    }
    return null;
  }
}
