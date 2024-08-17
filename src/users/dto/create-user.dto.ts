import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @MinLength(1)
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  role: string;
}
