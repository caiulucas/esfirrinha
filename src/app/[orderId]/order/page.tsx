'use client';
import { use } from 'react';

import { Button } from '@/components/Button';
import { RadioButton } from '@/components/RadioButton';
import { Separator } from '@/components/Separator';
import { Category as PrismaCategory, Product } from '@prisma/client';

import { Item } from './components/Item';

interface Category extends PrismaCategory {
  products: Product[];
}

async function getCategories(): Promise<Category[]> {
  const res = await fetch('/api/categories');

  const data = await res.json();
  return data;
}

const categoriesPromise = getCategories();

export default function Order() {
  const categories = use(categoriesPromise);

  return (
    <main className="flex flex-col gap-6 w-96">
      <h1 className="text-3xl font-medium text-left">Faça seu pedido</h1>

      <form className="flex flex-col gap-6 w-full">
        {categories.map((category) => (
          <>
            <section key={category.id} className="flex flex-col gap-6">
              <h2 className="text-xl font-medium">{category.name}</h2>
              <ul className="flex flex-col gap-2">
                {category.products.map((product) => (
                  <li key={product.name}>
                    <Item name={product.name} price={1} />
                  </li>
                ))}
              </ul>
            </section>

            <Separator />
          </>
        ))}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Dividir refri?</h2>
          <div className="flex gap-6">
            <RadioButton label="Sim" name="split" />
            <RadioButton label="Não" name="split" />
          </div>
        </section>
        <Separator />

        <section className="flex flex-col gap-6">
          <div className="flex justify-between items-center text-lg">
            <strong>Total</strong>
            <span>
              <strong className="text-yellow-500">R$</strong> 21,90
            </span>
          </div>
          <Button title="Finalizar pedido" />
        </section>
      </form>
    </main>
  );
}
