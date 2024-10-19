import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';
import { ConfigService } from '@nestjs/config';
import type { DrizzleDataBase } from './types/drizzle';

export const DrizzleAsyncProvider = 'DrizzleAsyncProvider';

export const drizzleProvider = [
  {
    provide: DrizzleAsyncProvider,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const databaseUrl = configService.get<string>('DATABASE_URL');
      const pool = new Pool({
        connectionString: databaseUrl,
        ssl: true,
      });

      return drizzle(pool, { schema }) as DrizzleDataBase;
    },
  },
];
