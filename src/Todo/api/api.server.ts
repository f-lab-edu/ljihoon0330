import {
  createTodoId,
  patchTodoParamsSchema,
  postTodoParamsSchema,
  Todo,
  TodoItem,
  todoSchema,
} from "@/src/Todo/api/api.schema";
import { TODO_FILE_PATH } from "@/src/Todo/api/constants";
import { merge } from "es-toolkit";
import { readFileSync, writeFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const todo = readTodo();
  return res.status(200).json(todo);
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { content } = postTodoParamsSchema.parse(req.body);
  const todo = writeTodoItem({
    content,
    id: createTodoId(Date.now().toString()),
    isCompleted: false,
  });
  return res.status(201).json(todo);
}

export async function PATCH(req: NextApiRequest, res: NextApiResponse) {
  const data = patchTodoParamsSchema.parse(req.body);
  const todo = readTodo();
  const index = todo.findIndex(({ id }) => id === data.id);
  if (index < 0) throw new Error("존재하지 않는 항목입니다.");
  const newTodo = todo.with(index, merge(todo[index], data));
  writeTodo(newTodo);
  return res.status(200).json(newTodo);
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {}

function readTodo() {
  const todo = readFileSync(TODO_FILE_PATH, "utf-8") || "[]";
  return todoSchema.parse(JSON.parse(todo));
}

function writeTodo(data: Todo) {
  writeFileSync(TODO_FILE_PATH, JSON.stringify(data), "utf-8");
}

function writeTodoItem(data: TodoItem) {
  const todo = readTodo();
  todo.push(data);
  writeFileSync(TODO_FILE_PATH, JSON.stringify(todo), "utf-8");
  return todo;
}
