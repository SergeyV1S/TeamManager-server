import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { DrizzleAsyncProvider } from "src/drizzle/drizzle.provider";
import { DrizzleDataBase } from "@drizzle/types/drizzle";

@Injectable()
export class UserService {
  constructor(@Inject(DrizzleAsyncProvider) private db: DrizzleDataBase) {}

  createUser(createUserDto: CreateUserDto) {
    return "This action adds a new user";
  }

  findUser(uid: string) {
    return `This action returns a #${uid} user`;
  }

  updateUser(uid: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${uid} user`;
  }
}
