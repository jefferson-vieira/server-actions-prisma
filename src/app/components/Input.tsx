import type { InputHTMLAttributes } from "react";
import { useId } from "react";

interface OwnProps {
  label: string;
}

type Props = OwnProps & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ label, ...props }: Props) {
  const id = useId();

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>

      <input
        {...props}
        className="bg-zinc-800 p-2 rounded-md outline-none"
        id={id}
      />
    </div>
  );
}
