import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @IsInt()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  age: number;
}
