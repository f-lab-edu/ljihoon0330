import { updateTodoItem } from "@/src/Todo/api/api.hook";
import { type TodoItem as TodoItemType } from "@/src/Todo/api/api.schema";
import styles from "./TodoItem.module.css";

export function TodoItem({ id, content, isCompleted }: TodoItemType) {
  return (
    <li className={styles.li} data-id={id}>
      <span
        className={isCompleted ? styles.completed : ""}
        onClick={() => {
          updateTodoItem({ id, isCompleted: !isCompleted });
        }}
      >
        {content}
      </span>
    </li>
  );
}
