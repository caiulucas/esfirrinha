import { Controller } from '@/components/Controller';
import { formatCurrency } from '@/utils/currency';

interface ItemProps {
  name: string;
  price: number;
}

export function Item({ name, price }: ItemProps) {
  const currency = formatCurrency(price).split('\u00A0');

  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-lg">{name}</p>
        <span>
          <strong className="text-yellow-500">{currency[0]}</strong>{' '}
          {currency[1]}
        </span>
      </div>
      <Controller />
    </div>
  );
}
