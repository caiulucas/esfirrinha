interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: 'primary' | 'secondary';
}

const variants = {
  primary: 'bg-yellow-500 hover:bg-yellow-400 text-black',
  secondary:
    'bg-transparent border-yellow-500 border-2 text-yellow-500 hover:border-yellow-400 hover:text-yellow-400'
};

export function Button({ title, variant = 'primary' }: ButtonProps) {
  return (
    <button className={`${variants[variant]} rounded w-full h-10 p-2`}>
      <span className="font-medium">{title}</span>
    </button>
  );
}
