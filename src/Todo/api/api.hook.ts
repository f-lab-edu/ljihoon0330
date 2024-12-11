import { queryClient } from "@/src/Shared/react-query/client";
import { getTodo, patchTodo, postTodo, todoQuery } from "@/src/Todo/api/api";
import { PatchTodoParams, PostTodoParams } from "@/src/Todo/api/api.schema";
import { useQuery } from "react-query";

export function useTodo() {
  return useQuery({
    queryFn: getTodo,
    ...todoQuery(),
  });
}

export function addTodoItem(data: PostTodoParams) {
  const { queryKey } = todoQuery();
  queryClient.executeMutation({
    mutationFn: () => postTodo(data),
    onSuccess(data) {
      queryClient.setQueryData(queryKey, data);
    },
  });
}

export function updateTodoItem(data: PatchTodoParams) {
  const { queryKey } = todoQuery();
  queryClient.executeMutation({
    mutationFn: () => patchTodo(data),
    onSuccess(data) {
      queryClient.setQueryData(queryKey, data);
    },
  });
}
