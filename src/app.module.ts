import { Module } from "@nestjs/common";
import { DrizzleModule } from "@drizzle/drizzle.module";
import { UserModule } from "@modules/user/user.module";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "@modules/auth/auth.module";

@Module({
  imports: [
    DrizzleModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
