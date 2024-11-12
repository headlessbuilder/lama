import type { z } from 'zod';
import { pgTable } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const providers = pgTable('providers', {});

export type SelectProvider = typeof providers.$inferSelect;
export type InsertProvider = typeof providers.$inferInsert;

export const ZodSelectProvider: z.Schema = createSelectSchema(providers);
export const ZodInsertProvider: z.Schema = createInsertSchema(providers);
