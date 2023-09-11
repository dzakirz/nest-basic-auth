import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class SignupDto {
  @IsString()
  name;

  @IsString()
  @IsEmail()
  email;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  password;
}
