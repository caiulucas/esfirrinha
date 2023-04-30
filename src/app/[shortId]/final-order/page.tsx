'use client';
import { Separator } from '@/components/Separator';

import { Item } from './components/Item';

export default function FinalOrder() {
  return (
    <main className="flex flex-col gap-6 w-96">
      <h1 className="text-3xl font-medium text-left">Faça seu pedido</h1>

      <form className="flex flex-col gap-6 w-full">
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Cuika</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Item label="3x Carne - Esfirra" price={1.8} />
            </li>
            <li>
              <Item label="3x Carne - Esfirra" price={1.8} />
            </li>
            <li>
              <Item label="3x Carne - Esfirra" price={1.8} />
            </li>
            <li>
              <Item label="Refrigerante - Não" price={0} />
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-6">
          <div className="flex justify-between items-center text-lg">
            <strong>Total</strong>
            <span>
              <strong className="text-yellow-500">R$</strong> 21,90
            </span>
          </div>
        </section>

        <Separator />

        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Cuika</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Item label="3x Carne - Esfirra" price={1.8} />
            </li>
            <li>
              <Item label="3x Carne - Esfirra" price={1.8} />
            </li>
            <li>
              <Item label="3x Carne - Esfirra" price={1.8} />
            </li>
            <li>
              <Item label="Refrigerante - Não" price={0} />
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-6">
          <div className="flex justify-between items-center text-lg">
            <strong>Total</strong>
            <span>
              <strong className="text-yellow-500">R$</strong> 21,90
            </span>
          </div>
        </section>

        <Separator />

        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Pedido final</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Item label="6x Carne - Esfirra" price={10.8} />
            </li>
            <li>
              <Item label="6x Carne - Esfirra" price={10.8} />
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-6">
          <div className="flex justify-between items-center text-lg">
            <strong>Total</strong>
            <span>
              <strong className="text-yellow-500">R$</strong> 21,90
            </span>
          </div>
        </section>
      </form>
    </main>
  );
}
