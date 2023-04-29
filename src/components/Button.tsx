interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title }: ButtonProps) {
  return (
    <button
      className="bg-yellow-500 hover:bg-yellow-400 rounded w-full h-10
      p-2 font-medium text-black"
    >
      {title}
    </button>
  );
}
