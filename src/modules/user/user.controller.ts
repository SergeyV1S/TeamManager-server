import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { LoginDto } from "@modules/auth/dto/login.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/register")
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get(":uid")
  findOne(@Param("uuid") uuid: string) {
    return this.userService.findUser(uuid);
  }

  @Post("/byLogin")
  findByLogin(@Body() userData: LoginDto) {
    return this.userService.findUserByLogin(userData);
  }

  @Patch(":uid")
  update(@Param("uid") uid: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(uid, updateUserDto);
  }
}
