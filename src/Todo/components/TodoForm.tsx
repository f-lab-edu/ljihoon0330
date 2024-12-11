import { addTodoItem } from "@/src/Todo/api/api.hook";
import {
  PostTodoParams,
  postTodoParamsSchema,
} from "@/src/Todo/api/api.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import styles from "./TodoForm.module.css";

export function TodoForm() {
  const { register, reset, handleSubmit } = useForm<PostTodoParams>({
    resolver: zodResolver(postTodoParamsSchema),
  });

  const onSubmit = handleSubmit((data) => {
    addTodoItem(data);
    reset();
  });

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        placeholder="할 일을 적어주세요"
        {...register("content")}
      />
      <button type="submit" className={styles.button}>
        추가
      </button>
    </form>
  );
}
