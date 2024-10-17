import { Module } from '@nestjs/common';
import { DrizzleModule } from './drizzle/drizzle.module';
import { UserService } from './modules/user/user.service';
import { UserModule } from './modules/user/user.module';
import { UserController } from './modules/user/user.controller';

@Module({
  imports: [DrizzleModule, UserModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
