import { TodoForm } from "@/src/Todo/components/TodoForm";
import { TodoList } from "@/src/Todo/components/TodoList";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styles from "./Todo.module.css";

export function Todo() {
  return (
    <ErrorBoundary fallback={<div>에러가 발생했습니다.</div>}>
      <Suspense fallback={<div>로딩중...</div>}>
        <div className={styles.wrapper}>
          <TodoForm />
          <TodoList />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}
