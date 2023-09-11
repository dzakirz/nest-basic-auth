import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { JwtGuard } from './guards/jwt-guard';
import { JwtRefreshGuard } from './guards/jwt.refresh-guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() dto: SignupDto) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  async signin(@Body() dto: SigninDto) {
    return this.authService.signin(dto);
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  async refresh(@Request() req) {
    console.log("here")
    return this.authService.refresh(req.user);
  }

  @UseGuards(JwtGuard)
  @Get('me/:userId')
  async me(@Param('userId') userId: string) {
    return this.authService.me(userId);
  }
}
