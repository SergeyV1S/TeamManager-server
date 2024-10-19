import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  uid: uuid("uid").defaultRandom().primaryKey(),
  first_name: text("first_name").notNull(),
  second_name: text("second_name").notNull(),
  mail: text("mail").unique(),
  phone: text("phone").unique(),
  register_date: timestamp("register_date").notNull(),
  password: text("password").notNull()
});
