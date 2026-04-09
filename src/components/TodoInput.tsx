import { useState } from "react";

type Props = {
  onAdd: (text: string) => void;
};

function TodoInput({ onAdd }: Props) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    onAdd(input);
    setInput("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        className="border p-2 flex-1 rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tambah todo..."
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 rounded"
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;