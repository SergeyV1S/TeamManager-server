import { env } from './env';

export const corsConfig = {
  origin: [env.CLIENT_BASE_URL],
  credentials: true,
};
