import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { User } from './interface/user.interface';
import { UserService } from './user.service';
// import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(): User[] {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() user: User): User {
    return this.userService.create(user);
  }

  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string): User {
    return this.userService.findById(id);
  }

  @Delete()
  deleteAll(): User[] {
    return this.userService.deleteAll();
  }
}
