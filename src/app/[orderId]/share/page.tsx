import { Button } from '@/components/Button';

export default function Share() {
  return (
    <main className="flex flex-col gap-36">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-medium text-left">Compartilhar</h1>
        <p className="text-lg">
          Esse é o código do pedido. <br />
          Compartilhe com os outros que vão pedir também.
        </p>
      </div>

      <form className="flex flex-col gap-6 w-full">
        <p className="text-center text-xl font-medium">
          https://esfinha.com/asfgt
        </p>

        <Button title="Compartilhar" />
        <Button title="Fazer pedido" variant="secondary" />
      </form>
    </main>
  );
}
