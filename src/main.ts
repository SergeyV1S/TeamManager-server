import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { corsConfig } from "./config/cors.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8000);
  app.enableCors(corsConfig);
}
bootstrap();
