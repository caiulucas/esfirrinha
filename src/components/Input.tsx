interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <label className="flex flex-col gap-2">
      <span>{label}</span>
      <input {...props} />
    </label>
  );
}
