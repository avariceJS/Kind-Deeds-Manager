import { InputHTMLAttributes, PropsWithRef, useId } from "react"

export type UiTextFieldProps = {
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

export function UiTextField({ error, label, inputProps }: UiTextFieldProps) {
  const id = useId();
  return (
    <div className="ui-text-field">
      {label && <label htmlFor={id}>{label}</label>}
      <input {...inputProps} id={id} />
      {error && <div className="error">{error}</div>}
    </div>
  );
}
