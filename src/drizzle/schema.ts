import { integer, serial, text, pgTable, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { userSchema } from '../modules/user/schema/user.schema';

export { userSchema };
// export const user_role = pgTable('user_role', {
//   id: serial('id').primaryKey(),
//   name: text('name'),
// });
