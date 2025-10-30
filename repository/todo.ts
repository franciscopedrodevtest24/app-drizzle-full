"use server";
import db from "@/database/client";
import { todo } from "@/database/schemas";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const getData = async () => {
  const data = await db.select().from(todo);
  return data;
};

export const addTodo = async ( text: string) => {
  await db.insert(todo).values({
    text: text,
  });
};

export const deleteTodo = async (id: string) => {
  await db.delete(todo).where(eq(todo.id, id));

  revalidatePath("/");
};

export const toggleTodo = async (id: string) => {
  await db
    .update(todo)
    .set({
      done: not(todo.done),
    })
    .where(eq(todo.id, id));

  revalidatePath("/");
};

export const editTodo = async (id: string, text: string) => {
  await db
    .update(todo)
    .set({
      text: text,
    })
    .where(eq(todo.id, id));

  revalidatePath("/");
};
