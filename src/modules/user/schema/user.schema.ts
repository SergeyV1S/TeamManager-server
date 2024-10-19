import { date, pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const userSchema = pgTable('user', {
  id: uuid('id').defaultRandom().primaryKey(),
  first_name: text('first_name').notNull(),
  second_name: text('second_name').notNull(),
  mail: text('mail').unique(),
  phone: text('phone').unique(),
  register_date: date('register_date'),
  password: text('password').notNull(),
});
