import { z } from "zod";

const envSchema = z.object({
  CLIENT_BASE_URL: z.string().url().nullish(),
  DATABASE_URL: z.string().startsWith("postgresql://").nullish()
});

export const env = envSchema.parse(process.env);
