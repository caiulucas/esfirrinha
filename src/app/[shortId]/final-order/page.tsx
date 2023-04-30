'use client';
import { useParams } from 'next/navigation';
import { use } from 'react';

import { Separator } from '@/components/Separator';
import { formatCurrency } from '@/utils/currency';
import { queryClient } from '@/utils/queryClient';
import {
  Order as PrismaOrder,
  Group as PrismaGroup,
  User,
  OrderProduct as PrismaOrderProduct,
  Product as PrismaProduct,
  Category
} from '@prisma/client';

import { Item } from './components/Item';

interface Product extends PrismaProduct {
  name: string;
  price: number;
  category: Category;
}

interface OrderProduct extends PrismaOrderProduct {
  product: Product;
}

interface Order extends PrismaOrder {
  user: User;
  products: OrderProduct[];
}

interface Group extends PrismaGroup {
  orders: Order[];
}

async function getGroup(shortId: string) {
  const res = await fetch(`/api/groups/?shortId=${shortId}`);

  const data = await res.json();
  return data;
}

export default function FinalOrder() {
  const { shortId } = useParams();

  const group = use<Group>(
    queryClient<Group>('group', () => getGroup(shortId))
  );

  const formattedGroup = {
    orders: group.orders.map((order) => ({
      ...order,
      formattedTotal: formatCurrency(order.total / 100).split('\u00a0')
    }))
  };

  const allProducts = group.orders
    .flatMap((order) => order.products)
    .reduce((acc: OrderProduct[], product) => {
      const index = acc.findIndex((p) => p.product_id === product.product_id);

      if (index === -1) {
        acc.push(product);
      } else {
        acc[index].quantity += product.quantity;
        acc[index].total += product.total;
      }

      return acc;
    }, []);

  const total = allProducts.reduce((acc, product) => {
    return acc + product.total;
  }, 0);

  const formattedTotal = formatCurrency(total / 100).split('\u00a0');

  return (
    <main className="flex flex-col gap-6 w-96">
      <h1 className="text-3xl font-medium text-left">Faça seu pedido</h1>

      <form className="flex flex-col gap-6 w-full">
        {formattedGroup.orders.map((order) => (
          <section key={order.id} className="flex flex-col gap-6">
            <h2 className="text-xl font-medium">{order.user.name}</h2>
            <ul className="flex flex-col gap-2">
              {order.products.map((product) => (
                <li key={product.id}>
                  <Item
                    label={`${product.quantity}x ${product.product.name} - ${product.product.category.name}`}
                    price={product.total / 100}
                  />
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center text-lg">
                <strong>Total</strong>
                <span>
                  <strong className="text-yellow-500">
                    {order.formattedTotal[0]}
                  </strong>{' '}
                  {order.formattedTotal[1]}
                </span>
              </div>
            </div>
            <Separator />
          </section>
        ))}

        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Pedido final</h2>
          <ul className="flex flex-col gap-2">
            {allProducts.map((product) => (
              <li key={product.id}>
                <Item
                  label={`${product.quantity}x ${product.product.name} - ${product.product.category.name}`}
                  price={product.total / 100}
                />
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-6">
          <div className="flex justify-between items-center text-lg">
            <strong>Total</strong>
            <span>
              <strong className="text-yellow-500">{formattedTotal[0]}</strong>{' '}
              {formattedTotal[1]}
            </span>
          </div>
        </section>
      </form>
    </main>
  );
}
