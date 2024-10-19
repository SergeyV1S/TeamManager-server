import { Module } from "@nestjs/common";
import { DrizzleModule } from "@drizzle/drizzle.module";
import { UserModule } from "@modules/user/user.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [DrizzleModule, UserModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [],
  providers: []
})
export class AppModule {}
