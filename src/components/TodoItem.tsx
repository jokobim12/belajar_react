import type { Todo } from "../types/todo";

type Props = {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

function TodoItem({ todo, onDelete, onToggle }: Props) {
  return (
    <li className="flex justify-between items-center border-b py-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span
          className={
            todo.completed ? "line-through text-gray-400" : ""
          }
        >
          {todo.text}
        </span>
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500"
      >
        Hapus
      </button>
    </li>
  );
}

export default TodoItem;