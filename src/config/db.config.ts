import { env } from "./env";

export const dbConfig = {
  postgres: {
    url: env.DATABASE_URL
  }
};
