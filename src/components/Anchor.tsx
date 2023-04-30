interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  variant?: 'primary' | 'secondary';
}

export function Anchor({ title }: AnchorProps) {
  return (
    <button className="bg-yellow-500 hover:bg-yellow-400 text-black rounded w-full h-10 p-2">
      <span className="font-medium">{title}</span>
    </button>
  );
}
