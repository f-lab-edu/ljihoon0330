import { useTodo } from "@/src/Todo/api/api.hook";
import { TodoItem } from "@/src/Todo/components/TodoItem";
import styles from "./TodoList.module.css";

export function TodoList() {
  const { data } = useTodo();

  return (
    <ul className={styles.ul}>
      {data?.map((item) => {
        return <TodoItem key={item.id} {...item} />;
      })}
    </ul>
  );
}
