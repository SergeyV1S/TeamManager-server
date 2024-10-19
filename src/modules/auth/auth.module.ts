import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserService } from "@modules/user/user.service";
import { DrizzleModule } from "@drizzle/drizzle.module";

@Module({
  imports: [DrizzleModule],
  controllers: [AuthController],
  providers: [AuthService, UserService]
})
export class AuthModule {}
