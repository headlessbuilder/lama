import type { z } from 'zod';
import { pgTable } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const sessions = pgTable('sessions', {});

export type SelectSession = typeof sessions.$inferSelect;
export type InsertSession = typeof sessions.$inferInsert;

export const ZodSelectSession: z.Schema = createSelectSchema(sessions);
export const ZodInsertSession: z.Schema = createInsertSchema(sessions);
