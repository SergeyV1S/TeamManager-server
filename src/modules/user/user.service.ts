import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findUser(uid: string) {
    return `This action returns a #${uid} user`;
  }

  updateUser(uid: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${uid} user`;
  }
}
