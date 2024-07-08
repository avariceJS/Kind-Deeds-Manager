import { useRemoveKindnessItem } from "@/entities/kindness-list/queries";
import { useState } from "react";

export function KindnessItem({ data, id }: { id: number; data: string }) {
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
    <div className="kindness-item">
      <div className="kindness-text">{data}</div>

      <button
        className="action-button"
        disabled={isLoading}
        onClick={handleRemove}
      >
        Delete
      </button>
    </div>
  );
}
