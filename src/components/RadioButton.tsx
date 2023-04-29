interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function RadioButton({ label, ...props }: RadioButtonProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="radio" title={label} className="hidden peer" {...props} />
      <span
        className="w-5 h-5 rounded-full flex items-center justify-center
        transition-all duration-200 border-2 border-gray-600 peer-checked:border-yellow-500
        peer-checked:after:content-[''] peer-checked:after:w-2 peer-checked:after:h-2
        peer-checked:after:rounded-full peer-checked:after:bg-yellow-500"
      />
      <span>{label}</span>
    </label>
  );
}
