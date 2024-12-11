import { Query } from "@/src/Shared/react-query/query.type";
import {
  PatchTodoParams,
  PostTodoParams,
  todoSchema,
} from "@/src/Todo/api/api.schema";
import axios from "axios";

export const todoQuery: Query = () => ({
  queryKey: ["todo"],
  enabled: true,
});

const todoAPI = axios.create({
  baseURL: "/api/todo",
});

export async function getTodo() {
  const response = await todoAPI({
    method: "GET",
  });
  return todoSchema.parse(response.data);
}

export async function postTodo(data: PostTodoParams) {
  const response = await todoAPI({
    method: "POST",
    data,
  });

  return todoSchema.parse(response.data);
}

export async function patchTodo(data: PatchTodoParams) {
  const response = await todoAPI({
    method: "PATCH",
    data,
  });

  return todoSchema.parse(response.data);
}
