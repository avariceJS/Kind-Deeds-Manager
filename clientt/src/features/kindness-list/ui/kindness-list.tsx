import { UiSpinner } from "@/shared/ui/spinner";
import { useKindnessItems } from "../model/use-kindness-items";
import { KindnessItem } from "./kindness-item";

export function KindnessList() {
  const { items, q, setQ, IsLoading } = useKindnessItems();

  const isLoader = !IsLoading;

  const isEmptyText = !IsLoading && items.length === 0;
  const isItems = items.length > 0;

  return (
    <div>
      <div>
        {isLoader && <UiSpinner />}
        {isEmptyText && <div>List is empty...</div>}
        {isItems &&
          items.map((item, index) => <KindnessItem key={index} {...item} />)}
      </div>
    </div>
  );
}
