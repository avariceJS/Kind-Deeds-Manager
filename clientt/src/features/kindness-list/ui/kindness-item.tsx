import { useRemoveKindnessItem } from "@/entities/block-list/queries";
import { AddBlockItemDto } from "@/shared/api/generated";
import { useState } from "react";

export function KindnessItem({
  data,
  id,
}: {
  id: number;
  type: AddBlockItemDto;
  data: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const removeBlockItemMutation = useRemoveKindnessItem();

  const handleRemove = async () => {
    setIsLoading(true);
    try {
      await removeBlockItemMutation(id);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div>Доброе дело</div>
      <div>{data}</div>

      <button disabled={isLoading} onClick={handleRemove}>
        <Trash />
      </button>
    </div>
  );
}

const Trash = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
    />
  </svg>
);
