import type { z } from 'zod';
import { pgTable } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const accounts = pgTable('accounts', {});

export type SelectAccount = typeof accounts.$inferSelect;
export type InsertAccount = typeof accounts.$inferInsert;

export const ZodSelectAccount: z.Schema = createSelectSchema(accounts);
export const ZodInsertAccount: z.Schema = createInsertSchema(accounts);
