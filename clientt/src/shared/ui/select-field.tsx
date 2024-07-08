import { PropsWithRef, SelectHTMLAttributes, useId } from "react";

export type UiSelectOption = {
  value: string;
  label: string;
};

export type UiSelectFieldProps = {
  label?: string;
  error?: string;
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
  options?: UiSelectOption[];
};

export function UiSelectField({

  error,
  label,
  selectProps: inputProps,
  options,
}: UiSelectFieldProps) {
  const id = useId();
  return (
    <div>
      {label && (
        <label htmlFor={id}>
          {label}
        </label>
      )}
      <select {...inputProps} id={id}>
        {options?.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div>{error}</div>}
    </div>
  );
}
