'use client';

import { Button } from '@/components/Button';
import { RadioButton } from '@/components/RadioButton';

import { Item } from './components/Item';

export default function Order() {
  return (
    <main className="flex flex-col gap-6 w-96">
      <h1 className="text-3xl font-medium text-left">Faça seu pedido</h1>

      <form className="flex flex-col gap-6 w-full">
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Esfirras</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Item name="Carne" price={1.8} />
            </li>
            <li>
              <Item name="Calabresa" price={1.8} />
            </li>
            <li>
              <Item name="Queijo" price={1.8} />
            </li>
            <li>
              <Item name="Frango" price={1.8} />
            </li>
            <li>
              <Item name="Portuguesa" price={1.8} />
            </li>
            <li>
              <Item name="Napolitana" price={1.8} />
            </li>
          </ul>
        </section>
        <div className="bg-gray-600 w-full h-px" />
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
        <div className="bg-gray-600 w-full h-px" />

        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Dividir refri?</h2>
          <div className="flex gap-6">
            <RadioButton label="Sim" name="split" />
            <RadioButton label="Não" name="split" />
          </div>
        </section>
        <div className="bg-gray-600 w-full h-px" />

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
