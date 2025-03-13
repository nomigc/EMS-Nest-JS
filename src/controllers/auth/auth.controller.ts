import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { successfulResponse } from 'src/utils';
import { LoginUserDto, RegisterUserDto } from 'src/definitions/dtos/auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: AuthService) {}
  @Post('register')
  async create(@Body() registerUserDto: RegisterUserDto) {
    const newUser = await this.userService.register(registerUserDto);
    return successfulResponse('User created successfully', newUser);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    const loginUser = await this.userService.login(loginUserDto);
    return successfulResponse('User logged in successfully', loginUser);
  }
}
