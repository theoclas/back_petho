import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { loginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly Authservice: AuthService) {}
  @Post('register')
  register(
    @Body()
    registerDto: RegisterDto,
  ) {
    console.log(registerDto);

    return this.Authservice.register(registerDto);
  }

  @Post('login')
  login(
    @Body()
    loginDto: loginDto,
  ) {
    return this.Authservice.login(loginDto);
  }
}
