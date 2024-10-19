import * as schema from "../schema";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";

export type DrizzleDataBase = NodePgDatabase<typeof schema>;
