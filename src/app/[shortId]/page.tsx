'use client';
import { useParams } from 'next/navigation';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export default function Register() {
  const { shortId } = useParams();

  return (
    <main className="flex flex-col items-center justify-center gap-36">
      <div>
        <h1 className="text-3xl text-center font-medium">Esfirrinha??</h1>
        <p>Código do pedido: {shortId}</p>
      </div>

      <form className="flex flex-col gap-4 w-full">
        <Input label="Nome:" placeholder="Digite seu nome ou apelido" />
        <Button title="Fazer pedido" />
        <Button title="Ver pedido geral" variant="secondary" />
      </form>
    </main>
  );
}
