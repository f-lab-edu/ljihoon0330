import { z } from "zod";

const todoId = z.string().brand("todoId");

export function createTodoId(data: string) {
  return todoId.parse(data);
}

const todoItemSchema = z.object({
  id: todoId,
  content: z.string().trim().min(1),
  isCompleted: z.boolean(),
});

export const todoSchema = z.array(todoItemSchema);

export const postTodoParamsSchema = todoItemSchema.pick({ content: true });

export const patchTodoParamsSchema = z.intersection(
  todoItemSchema.pick({ id: true }),
  todoItemSchema.omit({ id: true }).partial(),
);

export type TodoId = z.infer<typeof todoId>;
export type TodoItem = z.infer<typeof todoItemSchema>;
export type Todo = z.infer<typeof todoSchema>;
export type PostTodoParams = z.infer<typeof postTodoParamsSchema>;
export type PatchTodoParams = z.infer<typeof patchTodoParamsSchema>;
