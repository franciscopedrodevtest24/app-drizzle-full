import { generateId } from "@/lib/uuid";
import {  text, boolean, pgTable } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: text("id").primaryKey().$defaultFn(()=>generateId()),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});
