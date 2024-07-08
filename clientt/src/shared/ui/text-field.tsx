import { InputHTMLAttributes, PropsWithRef, useId } from "react";

export type UiTextFieldProps = {
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

export function UiTextField({
  error,
  label,
  inputProps,
}: UiTextFieldProps) {
  const id = useId();
  return (
    <div>
      {label && (
        <label htmlFor={id}>
          {label}
        </label>
      )}
      <input
        {...inputProps}
        id={id}
         
      />
      {error && <div>{error}</div>}
    </div>
  );
}
