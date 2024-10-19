import { BadRequestException, ConflictException, Inject, Injectable } from "@nestjs/common";
import type { CreateUserDto } from "./dto/create-user.dto";
import type { UpdateUserDto } from "./dto/update-user.dto";
import { DrizzleAsyncProvider } from "src/drizzle/drizzle.provider";
import { DrizzleDataBase } from "@drizzle/types/drizzle";
import { user } from "./schema/user.schema";
import { hash } from "bcrypt";
import { eq, or } from "drizzle-orm";
import type { LoginDto } from "@modules/auth/dto/login.dto";

@Injectable()
export class UserService {
  constructor(@Inject(DrizzleAsyncProvider) private db: DrizzleDataBase) {}

  async createUser(createUserDto: CreateUserDto) {
    try {
      const hashPassword = await hash(createUserDto.password, 10);

      const isUserExist = await this.db
        .select()
        .from(user)
        .where(or(eq(user.mail, createUserDto.mail), eq(user.phone, createUserDto.phone)));

      if (isUserExist.length > 0) {
        throw new ConflictException(
          "Пользователь с таким адресом электронной почты или номером телефона уже существует"
        );
      }

      const result = await this.db
        .insert(user)
        .values({ ...createUserDto, password: hashPassword, register_date: new Date() })
        .returning({ uid: user.uid });

      return result;
    } catch (error) {
      throw error;
    }
  }

  async findUserByLogin(userData: Omit<LoginDto, "password">) {
    try {
      if (userData) {
        const userByMail = await this.db
          .select()
          .from(user)
          .where(or(eq(user.mail, userData.mail), eq(user.phone, userData.phone)));
        return userByMail[0];
      } else {
        throw new BadRequestException("Неверные данные");
      }
    } catch (error) {
      throw error;
    }
  }

  findUser(uid: string) {
    return `This action returns a #${uid} user`;
  }

  updateUser(uid: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${uid} user`;
  }
}
