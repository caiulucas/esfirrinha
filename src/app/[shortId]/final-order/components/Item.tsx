import { formatCurrency } from '@/utils/currency';

interface ItemProps {
  label: string;
  price: number;
}

export function Item({ label, price }: ItemProps) {
  const currency = formatCurrency(price).split('\u00A0');
  console.log(currency);

  return (
    <div className="flex justify-between items-center">
      <p className="text-lg">{label}</p>
      <span>
        <strong className="text-yellow-500">{currency[0]}</strong> {currency[1]}
      </span>
    </div>
  );
}
