import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "@modules/user/dto/create-user.dto";
import { LoginDto } from "./dto/login.dto";
import { UserService } from "@modules/user/user.service";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(createUserDto: CreateUserDto) {
    const newUser = await this.userService.createUser(createUserDto);
    return newUser[0];
  }

  signIn(loginDto: LoginDto) {
    return `This action returns all auth`;
  }

  logout(id: number) {
    return `This action returns a #${id} auth`;
  }

  validateUser() {}
}
