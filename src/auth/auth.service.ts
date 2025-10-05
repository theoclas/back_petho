import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { loginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly UsersService: UsersService) {}

  async register(registerDto: RegisterDto) {
    const encryp = await bcrypt.hash(registerDto.password, 10);
    registerDto.password = encryp;

    const user = await this.UsersService.findOneByEmail(registerDto.email);
    if (user) {
      throw new BadRequestException('El usuario ya existe');
    }
    return await this.UsersService.create(registerDto);
  }

  async login(loginDto: loginDto) {
    const user = await this.UsersService.findOneByEmail(loginDto.email);
    if (!user) {
      throw new UnauthorizedException('El usuario no existe');
    }
    const isMatch = await bcrypt.compare(loginDto.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }
    return user;
  }
}
