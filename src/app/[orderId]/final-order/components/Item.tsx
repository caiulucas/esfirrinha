interface ItemProps {
  label: string;
  price: number;
}

export function Item({ label, price }: ItemProps) {
  return (
    <div className="flex justify-between items-center">
      <p className="text-lg">{label}</p>
      <span>
        <strong className="text-yellow-500">R$</strong> {price}
      </span>
    </div>
  );
}
