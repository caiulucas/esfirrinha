interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  variant?: 'primary' | 'secondary';
}

export function Anchor({ title, ...props }: AnchorProps) {
  return (
    <a
      className="bg-yellow-500 hover:bg-yellow-400 text-black text-center rounded w-full h-10 p-2"
      {...props}
    >
      <span className="font-medium">{title}</span>
    </a>
  );
}
