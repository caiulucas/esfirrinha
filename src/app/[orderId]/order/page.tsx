'use client';
import { use } from 'react';

import { Product } from '@/app/api/products/route';
import { Button } from '@/components/Button';
import { RadioButton } from '@/components/RadioButton';
import { Separator } from '@/components/Separator';

import { Item } from './components/Item';

async function getProducts() {
  const res = await fetch('/api/products');

  const data: Product[] = await res.json();
  return data;
}

const productsPromise = getProducts();

export default function Order() {
  const products = use(productsPromise);
  const sfihas = products.filter(
    (product) => product.data.category === 'Esfirra'
  );
  const sandwiches = products.filter(
    (product) => product.data.category === 'Sanduíche'
  );

  console.log(products);

  return (
    <main className="flex flex-col gap-6 w-96">
      <h1 className="text-3xl font-medium text-left">Faça seu pedido</h1>

      <form className="flex flex-col gap-6 w-full">
        {!!sfihas.length && (
          <>
            <section className="flex flex-col gap-6">
              <h2 className="text-xl font-medium">Esfirras</h2>
              <ul className="flex flex-col gap-2">
                {sfihas.map((sfiha) => (
                  <li key={sfiha.data.name}>
                    <Item name={sfiha.data.name} price={sfiha.data.price} />
                  </li>
                ))}
              </ul>
            </section>

            <Separator />
          </>
        )}

        {!!sandwiches.length && (
          <>
            <section className="flex flex-col gap-6">
              <h2 className="text-xl font-medium">Sanduíches</h2>
              <ul className="flex flex-col gap-2">
                <li>
                  <Item name="Mata fome" price={13} />
                </li>
                <li>
                  <Item name="Monstruoso" price={18} />
                </li>
              </ul>
            </section>
            <Separator />
          </>
        )}

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
