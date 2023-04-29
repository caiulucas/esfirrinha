import { Controller } from '@/components/Controller';

interface ItemProps {
  name: string;
  price: number;
}

export function Item({ name, price }: ItemProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-lg">{name}</p>
        <span>
          <strong className="text-yellow-500">R$</strong> {price}
        </span>
      </div>
      <Controller />
    </div>
  );
}
