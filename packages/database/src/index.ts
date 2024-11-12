import postgres from 'postgres';
import * as schema from './schema';
import { drizzle } from 'drizzle-orm/postgres-js';

const client = postgres(process.env.DATABASE_URI as string, {
  max: 512,
});
export const database = drizzle(client, {
  schema,
  logger: process.env.NODE_ENV !== 'production',
});

export * from './schema';
export * from './queries';
